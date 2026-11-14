# Adding a source clipping

<p class="classification">Classification: INTERNAL // CLEARANCE: EDITOR</p>

<div class="file-stamp">SOURCES PROTOCOL</div>

Short recipe for the next real article. Keep fiction out of this folder.

## 1. Create a page

Path: `docs/sources/<slug>.md`  
Slug from the topic, e.g. `beta-pictoris-b-radio-signals.md`.

### Frontmatter template

```yaml
---
title: Short internal title
date: YYYY-MM-DD
outlet: Publication name
author: Author name
externalUrl: https://example.com/original-article
tags:
  - topic-one
  - topic-two
---
```

## 2. Page body checklist

- Stamp it as **real press** (`Classification: REAL PRESS`, `source-badge`, file stamp `PRESS CLIPPING`).
- Light Redacted Skies framing is fine; **never invent conclusions** or claim aliens unless the source does (and even then, quote carefully).
- Accurate summary + key facts table.
- **Prominent outbound link** to the original.
- Optional “Related on Redacted Skies” links.
- **Do not** paste the full article (copyright). Summarize + link out.

## 3. Index + nav

1. Add a row to the matching topic table in [`index.md`](./index.md) (light groups such as **Science** or **Sightings** — keep grouping simple; add a heading only when a new category is clearly useful).
2. Tag the page frontmatter so related clippings stay findable (e.g. `exoplanet`, `sighting`, `uap`, place names).
3. Add the page under the **Sources** group in `docs/.vitepress/config.ts` (sidebar; nav already points at `/sources/`).

## 4. Separation rule

| Folder | Content |
| --- | --- |
| `docs/sources/` | Real journalism / science reporting |
| `docs/sightings/`, `docs/crash-sites/` | Fictional dossiers & speculation |

If it isn’t a published external source with a URL, it doesn’t belong here.
