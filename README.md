# Personal Academic Site (Jekyll)

This repository builds a static personal academic website with Jekyll (AcademicPages / Minimal Mistakes base) plus a custom "Endspace / industrial HUD" skin.

The goal of this README is: after the initial setup, you should be able to update almost all visible content by editing Markdown files (plus one small YAML file for the homepage hero).

## Local preview

Prereqs: Ruby + Bundler.

```bash
bundle install
bundle exec jekyll serve -l -H localhost --port 4000 --livereload --config _config.yml,_config_dev.yml
```

Build-only:

```bash
bundle exec jekyll build --config _config.yml,_config_dev.yml
```

## Where to edit content (by section)

### Site-wide metadata

- `_config.yml`
  - `title`, `description`, author fields (email, affiliation, etc.)
  - collections: `publications`, `talks`, `news`

### Navigation bar

- `_data/navigation.yml`
  - controls the top nav items and their icons
  - each item supports:
    - `title`: text label
    - `url`: internal path (e.g. `/publications/`) or an anchor (e.g. `/#research`)
    - `icon`: one of the SVG ids in `_includes/endfield/icons/` (e.g. `lore`, `notice`, `operator`)

### Homepage

The homepage is `/_pages/about.md` (permalink `/`) and renders `/_includes/home.html`.

- Hero text: `_data/home.yml` under `hero:`
- Research cards (clickable): generated from the Research subpages (Markdown)
- News list: generated from `/_news/*.md` (Markdown)

### Research (homepage cards + subpages)

Each Research card on the homepage links to a dedicated Markdown page under `/_pages/`.

Edit these files:

- `_pages/research-diffusion-molecular-design.md`
- `_pages/research-llm-pretraining-scientific-sequences.md`
- `_pages/research-post-training-gflownet-rl.md`
- `_pages/research-ai-for-science-rna-proteins.md`

Each research page controls BOTH:
1) its own page content (Markdown body)
2) how the card looks on the homepage (front-matter fields)

Required/typical front-matter fields:

```yaml
---
layout: single
title: "Your Research Area"
permalink: /research/your-slug/
author_profile: false

# Makes it appear as a homepage Research card
research_area: true

# Controls ordering on the homepage (smaller first)
research_order: 10

# Card media + copy
research_image: /images/thumbs/your.svg
research_card_description: "1-2 sentence description shown on the card."
research_tags:
  - tag one
  - tag two

# Hover ticker text (marquee). You can freely customize.
research_ticker: "SOME TEXT • SOME TEXT • SOME TEXT •"

# Optional header icon
section_icon: operator
---
```

To add a NEW Research area:

1. Copy one of the existing `/_pages/research-*.md` files
2. Change `title` + `permalink`
3. Set `research_area: true` and a new `research_order`
4. Set `research_image` (add the image file under `images/thumbs/`)
5. Write the Markdown body under the front matter

### News (Markdown, auto-sorted)

News items live in `/_news/*.md`.

- Add a new item: create `/_news/YYYY-MM-DD-some-slug.md`
- The homepage automatically:
  - sorts by `date` (newest first)
  - groups by year with an automatic year header

Front matter:

```yaml
---
date: 2026-02-16
title: "One-line news entry."
---
```

If you omit `title`, the homepage will display the Markdown body text.

### Publications (Markdown, auto-sorted + year headers)

Publications live in `/_publications/*.md`.

The Publications page (`/_pages/publications.html`) automatically:

- sorts by `date` (newest first)
- groups by year with an automatic year header
- if `publication_category` is configured in `_config.yml`, it will group by category first, then by year within each category

To add a publication: create a new `/_publications/YYYY-MM-DD-some-slug.md` with a correct `date`.

Common fields used by the banner cards:

```yaml
---
title: "Paper title"
date: 2025-04-03
venue: "Conference / Journal"
thumbnail: /images/thumbs/some.svg
excerpt: "One or two lines shown on the card."
paperurl: "https://..."   # optional
codeurl: "https://..."    # optional
---
```

### Talking and Blogs (Markdown, auto-sorted + year headers)

The combined page is `/_pages/talks.html`.

It contains:

- Talking: items from `/_talks/*.md` (sorted by `date`, grouped by year)
- Blogs: items from `/_posts/*.md` (already time-sorted by Jekyll, grouped by year)

To add a talk: add a new file under `/_talks/` with a valid `date`.

To add a blog post: add a new file under `/_posts/` with name `YYYY-MM-DD-title.md`.

### CV (Markdown)

- `_pages/cv.md`

This page is intended to be simple and editable like a normal Markdown doc.

## Sorting and year grouping (how it works)

- Publications page: sorts and groups in `/_pages/publications.html`
- Talking page (talk list): sorts and groups in `/_pages/talks.html`
- Shared helper for year grouping: `/_includes/ef-grouped-banner-list.html`

The year title is based on `post.date | date: "%Y"`.

## Theme/UI knobs (if you need to tweak behavior)

### Intro / wipe animation (home only)

- Markup: `/_includes/boot-overlay.html`
- Trigger logic: `/_includes/head/custom.html` + `/_includes/scripts.html`
- Styling: `/_sass/_endspace.scss`

Skip the intro for a single load:

- `/?intro=0`

### Back-to-top button

- Markup: `/_layouts/default.html` (`#ef-totop`)
- Behavior: `/_includes/scripts.html`
- Styling/position: `/_sass/_endspace.scss` (`.ef-totop`)

## Common pitfalls

- Dates control ordering. If a card is in the wrong place, check the `date:` field.
- If a Research card disappears from the homepage, ensure the page has `research_area: true`.
- If you change `_config.yml`, restart `jekyll serve` (Jekyll does not hot-reload config).

## Upstream template note

The site started from AcademicPages / Minimal Mistakes. The structure is still Jekyll, but most visible content is now driven from Markdown in:

- `/_pages/`
- `/_publications/`
- `/_talks/`
- `/_news/`
- `/_posts/`
