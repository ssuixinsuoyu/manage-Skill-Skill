---
name: skill-atlas-builder
description: Build a local static website that indexes Codex skills, auto-loads a local skill manifest when available, supports full Chinese/English UI switching, installs additional skills through a local endpoint, explains each skill with a concrete example and sample answer shape, recommends which skill to use from a topic, imports a user's local .codex/skills or .agents/skills folder through browser folder selection, and generates copyable Codex skill-call prompts.
---

# Skill Atlas Builder

Use this skill when the user wants a website or local tool for browsing, explaining, recommending, importing, or launching Codex skills.

## What It Creates

A static website with:

- A mathematical white-space UI for skill discovery.
- A topic input that ranks matching skills.
- Skill cards with name, purpose, keywords, a concrete example, and a sample answer preview.
- Author/source folders that group large skill sets by creator or repository.
- Dynamic categories inferred from the current skill inventory, with per-category counts.
- Automatic local skill loading through `skills-manifest.json` or the local `/api/local-skills` endpoint.
- Full Chinese/English UI switching, including card purpose, examples, answer previews, controls, status text, and tags.
- Local skill installation from GitHub URLs, `owner/repo/path`, local folders, or zip files through `/api/install-skill`.
- A user-authorized folder import flow for `.codex/skills` or `.agents/skills`.
- A `调用` button that generates and copies a direct Codex skill prompt starting with `$skill-name`.

The website is static-first: `index.html`, `styles.css`, `app.js`, and an optional generated `skills-manifest.json`. It can run from a local file, a simple static server, GitHub Pages, Netlify, or Vercel. The local Python server also exposes `/api/local-skills` for live local scanning and `/api/install-skill` for local skill installation.

## Workflow

1. Copy the bundled template from `assets/skill-selector-template/` into the user's requested output directory.
2. If the user has not specified a target, create `skill-selector-tool` in the current workspace.
3. Prefer running `scripts/generate_skill_atlas.py` because it copies the template consistently and can optionally start a local server.
4. Let the generator write `skills-manifest.json` unless the user explicitly asks not to scan local skills.
5. After generation, tell the user the output path and local URL if a server was started.

## Commands

Generate the site:

```bash
python scripts/generate_skill_atlas.py --target ./skill-selector-tool
```

Generate and serve it:

```bash
python scripts/generate_skill_atlas.py --target ./skill-selector-tool --serve --port 8765
```

Refresh only the local skill manifest:

```bash
python scripts/generate_skill_atlas.py --target ./skill-selector-tool --manifest-only
```

When running from Codex, resolve the script path relative to this `SKILL.md` file.

## Browser Security Note

A public website cannot silently read a visitor's local Codex folders. Local auto-loading works only through a generated `skills-manifest.json` or the generator's local `/api/local-skills` endpoint. On a public host, the template falls back to browser folder selection: the user clicks `导入本机 Skills` and explicitly selects `.codex/skills` or `.agents/skills`. This is intentional and should not be bypassed.

Installing skills is also local-only. `/api/install-skill` is available only when the user runs the Python local server. Public static deployments should show the installer UI, but installation will fail unless a trusted local server is backing the page.

## Customization

For small edits, modify the generated site's `app.js`, `styles.css`, or `index.html` directly. Preserve the core interaction model: auto-load/import/install skills, show examples, show sample answer previews, group by author/source, infer dynamic categories, switch full Chinese/English UI, rank by topic, and generate copyable call prompts.
