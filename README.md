# Skill Atlas Builder

Skill Atlas Builder is a local website and Codex skill package for browsing, grouping, recommending, installing, and calling Codex skills.

## What Is Included

- `site/`: Static website source. It can be hosted on GitHub Pages, Netlify, Vercel, or any static server.
- `skill/`: Codex skill source, including the generator script and the website template.
- `skill-atlas-builder.zip`: Distributable skill package.

## Website Features

- Load local Codex skills automatically through a local endpoint, or import `.codex/skills` and `.agents/skills` manually in the browser.
- Browse skills by dynamic categories and author/source folders.
- Enter a topic and get recommended skills.
- Show each skill's purpose, concrete example, and sample answer shape.
- Switch between Chinese and English UI modes.
- Copy a direct `$skill-name` prompt for Codex skill invocation.
- Install additional skills through the local server endpoint when running locally.

## Local Preview

```bash
cd site
python -m http.server 8765
```

Then open:

```text
http://127.0.0.1:8765/
```

## Generate The Site From The Skill

```bash
python skill/scripts/generate_skill_atlas.py --target ./site --serve --port 8765
```

## Privacy Note

A public static website cannot silently read a visitor's local Codex folders. Visitors must explicitly select their own `.codex/skills` or `.agents/skills` folder, or run the local generator/server that exposes `/api/local-skills`.
