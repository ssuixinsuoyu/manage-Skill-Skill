#!/usr/bin/env python3
"""Generate a local Skill Atlas website and local skill manifest."""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import socketserver
import subprocess
import tempfile
import time
import urllib.request
import zipfile
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler
from pathlib import Path
from typing import Iterable
from urllib.parse import unquote, urlparse


CATEGORY_PATTERNS = [
    ("GitHub 协作", re.compile(r"github|pull request|\bpr\b|issue|\bci\b|\brepo\b|repository|代码托管", re.I)),
    ("浏览器自动化", re.compile(r"browser|chrome|playwright|网页自动化|浏览器|点击|截图|navigate|inspect", re.I)),
    ("演示文稿", re.compile(r"presentation|slides?|pptx|powerpoint|演示|幻灯片", re.I)),
    ("文档表格", re.compile(r"docs|docx|document|word|sheet|spreadsheet|excel|csv|文档|表格", re.I)),
    ("AI 资讯", re.compile(r"aihot|ai hot|ai 日报|ai 资讯|ai 圈|ai news|newsletter|日报|资讯|新闻|热点", re.I)),
    ("数据分析", re.compile(r"data|dataset|analytics|chart|visualize|数据|分析|图表", re.I)),
    ("插件开发", re.compile(r"plugin|connector|skill-creator|skill-installer|插件|安装|创建 skill|创建skill", re.I)),
    ("本地自动化", re.compile(r"computer-use|filesystem|terminal|powershell|shell|windows|本机|文件|自动化", re.I)),
    ("设计前端", re.compile(r"design|frontend|ui|web|brand|visual|image-to-code|stitch|minimalist|brutalist|canva|figma|网页|前端|设计|视觉|品牌", re.I)),
    ("视频图像", re.compile(r"video|remotion|seedance|image|card|xhs|小红书|视频|图像|卡片|轮播", re.I)),
    ("人物视角", re.compile(r"perspective|mentor|munger|feynman|jobs|musk|人物|视角|导师", re.I)),
    ("商业诊断", re.compile(r"business|diagnosis|decision|benchmark|商业|诊断|决策|对标", re.I)),
    ("内容创作", re.compile(r"content|writing|title|hook|humanizer|内容|文案|标题|写作|润色", re.I)),
    ("代码工程", re.compile(r"code|coding|programming|react|typescript|javascript|python|api|sdk|debug|工程|代码|编程|开发", re.I)),
]


def copy_template(target: Path, force: bool) -> None:
    skill_root = Path(__file__).resolve().parents[1]
    template = skill_root / "assets" / "skill-selector-template"
    if not template.exists():
        raise FileNotFoundError(f"Template not found: {template}")

    if target.exists():
        if not force:
            raise FileExistsError(f"Target already exists: {target}. Use --force to overwrite.")
        shutil.rmtree(target)

    shutil.copytree(template, target)


def parse_front_matter(content: str) -> dict[str, str]:
    match = re.match(r"^---\s*(.*?)\s*---", content, re.S)
    if not match:
        return {}

    meta: dict[str, str] = {}
    for line in match.group(1).splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        key = key.strip()
        value = value.strip().strip("'\"")
        if key:
            meta[key] = value
    return meta


def strip_front_matter(content: str) -> str:
    return re.sub(r"^---\s*.*?\s*---", "", content, flags=re.S).strip()


def infer_category(name: str, use: str, source: str = "") -> str:
    text = f"{name} {use}"
    source_text = source.replace("\\", "/").lower()
    if "/github/" in source_text:
        return "GitHub 协作"
    if "/browser/" in source_text or "/chrome/" in source_text:
        return "浏览器自动化"
    if re.search(r"/presentations?/", source_text):
        return "演示文稿"
    if re.search(r"/documents?/", source_text) or re.search(r"/spreadsheets?/", source_text) or "/google-drive/" in source_text:
        return "文档表格"
    for category, pattern in CATEGORY_PATTERNS:
        if pattern.search(text):
            return category
    return "系统工具"


def keywords_from_text(name: str, use: str) -> list[str]:
    text = f"{name} {use}".lower()
    latin = re.findall(r"[a-z0-9+#.]{2,}", text)
    chinese_terms = [
        term
        for term in re.split(r"[，。、“”‘’：:；;（）()\s/|]+", f"{name} {use}")
        if re.search(r"[\u4e00-\u9fff]", term) and 2 <= len(term) <= 8
    ]
    seen: set[str] = set()
    keywords: list[str] = []
    for keyword in [*latin, *chinese_terms]:
        if keyword not in seen:
            seen.add(keyword)
            keywords.append(keyword)
        if len(keywords) >= 8:
            break
    return keywords


CATEGORY_LABELS_EN = {
    "AI 资讯": "AI news",
    "商业诊断": "business",
    "内容创作": "content",
    "设计前端": "design",
    "人物视角": "perspective",
    "视频图像": "video and image",
    "代码工程": "code",
    "浏览器自动化": "browser automation",
    "GitHub 协作": "GitHub collaboration",
    "文档表格": "documents and sheets",
    "演示文稿": "presentations",
    "数据分析": "data analysis",
    "插件开发": "plugin development",
    "本地自动化": "local automation",
    "系统工具": "system",
}


def has_cjk(value: str) -> bool:
    return bool(re.search(r"[\u3400-\u9fff]", value or ""))


def english_heavy(value: str) -> bool:
    cjk = len(re.findall(r"[\u3400-\u9fff]", value or ""))
    latin = len(re.findall(r"[A-Za-z]", value or ""))
    return latin > 24 and latin > cjk * 1.8


def has_english_phrase(value: str) -> bool:
    text = value or ""
    return bool(re.search(r"[A-Za-z]{3,}\s+[A-Za-z]{3,}", text) or re.search(r"\b(use|when|build|create|install|resize|translate|control|generate|write|today|news|workflow|presentation|design)\b", text, re.I))


def clean_zh(value: str) -> str:
    return re.sub(r"\bskills?\b", "技能", value or "", flags=re.I)


def localized_fields(name: str, use: str, category: str) -> dict[str, str]:
    category_en = CATEGORY_LABELS_EN.get(category, "Codex")
    use_en = use if not has_cjk(use) else f"Use {name} for {category_en} workflows in Codex."
    use_zh = clean_zh(use) if has_cjk(use) and not english_heavy(use) and not has_english_phrase(use) else f"用于{category}类任务，适合调用 {name} 处理相关工作。"
    return {
        "useEn": use_en,
        "useZh": use_zh,
        "exampleEn": f"Example: use {name} to handle a {category_en} task.",
        "exampleZh": f"例如：使用 {name} 处理一个{category}类任务。",
        "sampleAnswerEn": f"Answer sample: provide a clear {category_en} workflow, key decisions, concrete outputs, and next steps.",
        "sampleAnswerZh": f"回答示例：输出清晰的{category}处理流程、关键判断、具体结果和下一步。",
    }


def infer_author(name: str, use: str, source: str) -> str:
    text = f"{name} {use} {source}".lower()
    if name == "aihot":
        return "aihot"
    if name.startswith("dbs"):
        return "dontbesilent"
    if "taste-skill" in text or "leonxlnx" in text:
        return "Leonxlnx / taste-skill"
    if "nuwa" in text or name.endswith("-perspective"):
        return "nuwa-skill / perspective examples"
    if "humanizer" in text:
        return "op7418 / Humanizer-zh"
    if "seedance" in text:
        return "dexhunter / seedance2-skill"
    if "google-drive" in text:
        return "Google Drive plugin"
    if "github" in text:
        return "GitHub plugin"
    if "hyperframes" in text:
        return "HyperFrames plugin"
    if "product-design" in text:
        return "Product Design plugin"
    if "openai-primary-runtime" in text or "openai-bundled" in text:
        return "OpenAI bundled"
    return "local / imported"


def first_body_line(content: str) -> str:
    body = strip_front_matter(content)
    for line in body.splitlines():
        stripped = line.strip()
        if stripped and not stripped.startswith("#"):
            return re.sub(r"^[-*>#\s]+", "", stripped)
    return ""


def default_roots() -> list[Path]:
    home = Path.home()
    cwd = Path.cwd()
    roots = [
        cwd / ".agents" / "skills",
        home / ".agents" / "skills",
        home / ".codex" / "skills",
        home / ".codex" / "plugins" / "cache" / "openai-primary-runtime",
        home / ".codex" / "plugins" / "cache" / "openai-bundled",
        home / ".codex" / "plugins" / "cache" / "openai-curated",
        home / ".codex" / "plugins" / "cache" / "openai-curated-remote",
    ]

    codex_home = os.environ.get("CODEX_HOME")
    if codex_home:
        roots.append(Path(codex_home).expanduser() / "skills")

    seen: set[str] = set()
    unique: list[Path] = []
    for root in roots:
        resolved = str(root.expanduser().resolve())
        if resolved not in seen:
            seen.add(resolved)
            unique.append(Path(resolved))
    return unique


def iter_skill_files(roots: Iterable[Path]) -> Iterable[Path]:
    ignored = {".git", "node_modules", "__pycache__"}
    for root in roots:
        if not root.exists():
            continue
        for path in root.rglob("SKILL.md"):
            if ignored.intersection(path.parts):
                continue
            yield path


def build_skill_record(path: Path) -> dict[str, object] | None:
    try:
        content = path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return None

    meta = parse_front_matter(content)
    name = (meta.get("name") or path.parent.name).strip()
    if not name:
        return None

    use = (meta.get("description") or first_body_line(content) or "本机导入的 Codex skill。").strip()
    use = use[:220]
    source = str(path)
    category = infer_category(name, use, source)
    localized = localized_fields(name, use, category)
    return {
        "name": name,
        "category": category,
        "use": use,
        **localized,
        "keywords": keywords_from_text(name, use),
        "example": localized["exampleZh"],
        "sampleAnswer": localized["sampleAnswerZh"],
        "author": meta.get("author") or meta.get("source") or infer_author(name, use, source),
        "source": source,
    }


def scan_local_skills(extra_roots: Iterable[Path] = ()) -> dict[str, object]:
    roots = [*default_roots(), *[root.expanduser().resolve() for root in extra_roots]]
    by_name: dict[str, dict[str, object]] = {}
    for path in iter_skill_files(roots):
        record = build_skill_record(path)
        if record and str(record["name"]) not in by_name:
            by_name[str(record["name"])] = record

    return {
        "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
        "roots": [str(root) for root in roots if root.exists()],
        "skills": sorted(by_name.values(), key=lambda item: str(item["name"]).lower()),
    }


def write_manifest(target: Path, extra_roots: Iterable[Path] = ()) -> dict[str, object]:
    target.mkdir(parents=True, exist_ok=True)
    payload = scan_local_skills(extra_roots)
    manifest_path = target / "skills-manifest.json"
    manifest_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote local skill manifest: {manifest_path} ({len(payload['skills'])} skills)")
    return payload


def install_root() -> Path:
    codex_home = os.environ.get("CODEX_HOME")
    if codex_home:
        return Path(codex_home).expanduser().resolve() / "skills"
    return Path.home() / ".codex" / "skills"


def safe_skill_name(name: str) -> str:
    cleaned = re.sub(r"[^A-Za-z0-9_.:-]+", "-", name.strip()).strip("-")
    return cleaned or "installed-skill"


def skill_name_from_dir(path: Path) -> str:
    try:
        meta = parse_front_matter((path / "SKILL.md").read_text(encoding="utf-8", errors="replace"))
    except OSError:
        meta = {}
    return safe_skill_name(meta.get("name") or path.name)


def find_skill_dirs(root: Path) -> list[Path]:
    if (root / "SKILL.md").exists():
        return [root]
    ignored = {".git", "node_modules", "__pycache__"}
    dirs: list[Path] = []
    for skill_file in root.rglob("SKILL.md"):
        if ignored.intersection(skill_file.parts):
            continue
        dirs.append(skill_file.parent)
    return dirs


def copy_skill_dirs(source_root: Path) -> list[dict[str, str]]:
    destination_root = install_root()
    destination_root.mkdir(parents=True, exist_ok=True)
    skill_dirs = find_skill_dirs(source_root)
    if not skill_dirs:
        raise ValueError(f"No SKILL.md found in {source_root}")

    installed: list[dict[str, str]] = []
    for skill_dir in skill_dirs:
        name = skill_name_from_dir(skill_dir)
        destination = destination_root / name
        if destination.exists():
            installed.append({"name": name, "status": "already-installed", "path": str(destination)})
            continue
        shutil.copytree(
            skill_dir,
            destination,
            ignore=shutil.ignore_patterns(".git", "__pycache__", "*.pyc", "node_modules"),
        )
        installed.append({"name": name, "status": "installed", "path": str(destination)})
    return installed


def parse_github_source(source: str) -> tuple[str, str, str, str]:
    source = source.strip()
    if re.fullmatch(r"[A-Za-z0-9_.-]+", source):
        return "openai", "skills", "main", f"skills/.curated/{source}"

    if re.match(r"^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+:", source):
        repo_part, path_part = source.split(":", 1)
        owner, repo = repo_part.split("/", 1)
        return owner, repo, "main", path_part.strip("/")

    if source.startswith("http://") or source.startswith("https://"):
        parsed = urlparse(source)
        if parsed.netloc.lower() != "github.com":
            raise ValueError("Only GitHub URLs or local paths are supported for install.")
        parts = [unquote(part) for part in parsed.path.strip("/").split("/") if part]
        if len(parts) < 2:
            raise ValueError("GitHub URL must include owner and repository.")
        owner, repo = parts[0], parts[1]
        if len(parts) >= 5 and parts[2] == "tree":
            return owner, repo, parts[3], "/".join(parts[4:])
        return owner, repo, "main", ""

    parts = [part for part in source.replace("\\", "/").split("/") if part]
    if len(parts) >= 2:
        owner, repo = parts[0], parts[1]
        return owner, repo, "main", "/".join(parts[2:])

    raise ValueError("Unrecognized skill source.")


def install_from_zip(zip_path: Path) -> list[dict[str, str]]:
    with tempfile.TemporaryDirectory(prefix="skill-atlas-zip-") as tmp:
        extract_root = Path(tmp) / "zip"
        extract_root.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(zip_path) as archive:
            resolved_root = extract_root.resolve()
            for member in archive.infolist():
                target = (extract_root / member.filename).resolve()
                try:
                    target.relative_to(resolved_root)
                except ValueError as exc:
                    raise ValueError("Unsafe zip path.") from exc
                archive.extract(member, extract_root)
        return copy_skill_dirs(extract_root)


def install_from_url_zip(url: str) -> list[dict[str, str]]:
    with tempfile.TemporaryDirectory(prefix="skill-atlas-download-") as tmp:
        zip_path = Path(tmp) / "skill.zip"
        urllib.request.urlretrieve(url, zip_path)
        return install_from_zip(zip_path)


def install_from_github(source: str) -> list[dict[str, str]]:
    owner, repo, ref, skill_path = parse_github_source(source)
    with tempfile.TemporaryDirectory(prefix="skill-atlas-git-") as tmp:
        clone_root = Path(tmp) / "repo"
        repo_url = f"https://github.com/{owner}/{repo}.git"
        subprocess.run(
            ["git", "clone", "--depth", "1", "--filter=blob:none", "--sparse", "--branch", ref, repo_url, str(clone_root)],
            check=True,
            capture_output=True,
            text=True,
        )
        if skill_path:
            subprocess.run(["git", "-C", str(clone_root), "sparse-checkout", "set", skill_path], check=True, capture_output=True, text=True)
            source_root = clone_root / skill_path
        else:
            source_root = clone_root
        return copy_skill_dirs(source_root)


def install_skill_source(source: str) -> list[dict[str, str]]:
    source = source.strip()
    if not source:
        raise ValueError("Missing skill source.")

    if source.startswith("http://") or source.startswith("https://"):
        parsed = urlparse(source)
        if parsed.path.lower().endswith(".zip"):
            return install_from_url_zip(source)
        return install_from_github(source)

    local_path = Path(source).expanduser()
    if local_path.exists():
        local_path = local_path.resolve()
        if local_path.is_file() and local_path.suffix.lower() == ".zip":
            return install_from_zip(local_path)
        if local_path.is_dir():
            return copy_skill_dirs(local_path)
        raise ValueError("Local source must be a folder or a .zip file.")

    return install_from_github(source)


class SkillAtlasHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, directory: str, scan_roots: list[Path], **kwargs) -> None:
        self.scan_roots = scan_roots
        super().__init__(*args, directory=directory, **kwargs)

    def do_GET(self) -> None:  # noqa: N802
        if self.path.split("?", 1)[0] == "/api/local-skills":
            payload = scan_local_skills(self.scan_roots)
            body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def do_POST(self) -> None:  # noqa: N802
        if self.path.split("?", 1)[0] != "/api/install-skill":
            self.send_error(HTTPStatus.NOT_FOUND)
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
            raw_body = self.rfile.read(length).decode("utf-8")
            request = json.loads(raw_body or "{}")
            source = str(request.get("source", "")).strip()
            installed = install_skill_source(source)
            payload = scan_local_skills(self.scan_roots)
            response = {"ok": True, "installed": installed, **payload}
            status = HTTPStatus.OK
        except Exception as exc:  # noqa: BLE001
            response = {"ok": False, "error": str(exc)}
            status = HTTPStatus.BAD_REQUEST

        body = json.dumps(response, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


def serve(target: Path, port: int, extra_roots: Iterable[Path] = ()) -> None:
    scan_roots = [root.expanduser().resolve() for root in extra_roots]

    def handler(*args, **kwargs):
        return SkillAtlasHandler(*args, directory=str(target), scan_roots=scan_roots, **kwargs)

    with ReusableTCPServer(("127.0.0.1", port), handler) as server:
        print(f"Serving Skill Atlas at http://127.0.0.1:{port}/")
        print(f"Local skill API: http://127.0.0.1:{port}/api/local-skills")
        print(f"Local install API: http://127.0.0.1:{port}/api/install-skill")
        print("Press Ctrl+C to stop.")
        server.serve_forever()


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate a Skill Atlas static website.")
    parser.add_argument("--target", default="skill-selector-tool", help="Output directory.")
    parser.add_argument("--force", action="store_true", help="Overwrite target if it exists.")
    parser.add_argument("--serve", action="store_true", help="Start a local server after generation.")
    parser.add_argument("--port", type=int, default=8765, help="Local server port.")
    parser.add_argument("--manifest-only", action="store_true", help="Only refresh skills-manifest.json in the target.")
    parser.add_argument("--no-scan", action="store_true", help="Do not write skills-manifest.json.")
    parser.add_argument("--scan-root", action="append", default=[], help="Extra local skill root to scan.")
    args = parser.parse_args()

    target = Path(args.target).resolve()
    extra_roots = [Path(root) for root in args.scan_root]

    if not args.manifest_only:
        copy_template(target, args.force)
        print(f"Generated Skill Atlas: {target}")

    if not args.no_scan:
        write_manifest(target, extra_roots)

    if args.serve:
        serve(target, args.port, extra_roots)
    elif not args.manifest_only:
        print(f"Open: {target / 'index.html'}")


if __name__ == "__main__":
    main()
