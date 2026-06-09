# Skill Atlas Builder

Skill Atlas Builder is a small website for managing Codex skills.

You can think of it as a clean "skill dashboard": it shows what skills you have, what each skill is for, and which skill is most suitable for a topic you type in.

It also includes a Codex skill package, so other people can download it and generate the same kind of website for their own skills.

## What This Project Does

This tool helps you answer three simple questions:

1. What skills do I have?
2. What is each skill used for?
3. If I want to do a task, which skill should I call?

For example, if you type:

```text
I want to write an English video prompt for Seedance
```

the website can recommend a related skill, show an example task, and give you a copyable prompt like:

```text
$seedance-prompt-en
```

That prompt can be pasted into Codex to call the skill.

## What Is Inside

This repository has three main parts:

- `index.html`, `app.js`, `styles.css`

  These files are placed at the repository root so the website can be opened easily with GitHub Pages.

- `site/`

  This is another copy of the website source. It is useful if you want to keep the website files grouped in one folder.

- `skill/`

  This is the Codex skill version. It contains the instructions and scripts used to generate the website.

- `skill-atlas-builder.zip`

  This is the downloadable package. Other people can download this zip and install the skill.

## Main Features

- Shows your local Codex skills in one place.
- Groups skills by category, author, or source.
- Supports Chinese and English mode.
- Shows each skill's name, purpose, example, and sample answer style.
- Lets you type a topic and get skill recommendations.
- Copies the correct `$skill-name` call format.
- Can import skills from `.codex/skills` or `.agents/skills`.
- Can install and load new skills when running with the local server.

## How To Preview The Website

### Open It Online

If this repository is published on GitHub, the repository page itself is not the website.

To make it open like a real website, enable GitHub Pages:

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Choose branch `main` and folder `/root`.
6. Save.

After GitHub finishes building, the site will be available at a URL like:

```text
https://your-github-name.github.io/manage-Skill-Skill/
```

### Open It Locally

Open a terminal in this project and run:

```bash
cd site
python -m http.server 8765
```

Then open this address in your browser:

```text
http://127.0.0.1:8765/
```

If you only want to look at the static page, you can also open `site/index.html` directly.

## How To Use The Skill Version

The skill package is inside:

```text
skill/
```

The generator script is:

```text
skill/scripts/generate_skill_atlas.py
```

You can run:

```bash
python skill/scripts/generate_skill_atlas.py --target ./site --serve --port 8765
```

This will generate the website and start a local preview server.

## About Local Skill Reading

A public website cannot secretly read someone's computer. That is a browser security rule, and it is a good thing.

So there are two ways to load skills:

- If you run the tool locally, it can read skills through the local server.
- If you open it as a public website, the visitor needs to manually choose their `.codex/skills` or `.agents/skills` folder.

This means each person can use the same website, but load their own skills.

## Who This Is For

This is useful if:

- You have many Codex skills and forget what each one does.
- You want a clean visual list of your skills.
- You want other people to download a skill that helps them build the same dashboard.
- You want a simple way to decide which skill to call for a task.

## Project Style

The website is designed to feel calm, white, mathematical, and organized.

The goal is not to make a flashy landing page. The goal is to make a practical tool that helps you see and use your skills more clearly.
