# Redacted Skies

**The skies aren't empty.**

**Live:** https://witty-desert-0e0aa7810.5.azurestaticapps.net/

Redacted Skies is a fun, conspiracy-flavored static site about aliens being real — told as declassified dossiers, sighting case files, crash-site speculation, and a disclosure timeline. Tone is intriguing and tongue-in-cheek, never mean-spirited.

Built with [VitePress](https://vitepress.dev) (Vue 3) and ready for [Azure Static Web Apps](https://learn.microsoft.com/azure/static-web-apps/).

## Local development

Requirements: Node.js 18+ (20+ recommended) and npm.

```bash
npm install
npm run dev
```

Dev server defaults to `http://localhost:5173`.

## Build & preview

```bash
npm run build
npm run preview
```

| Script | Command | Purpose |
| --- | --- | --- |
| `dev` | `vitepress dev docs` | Local hot-reload server |
| `build` | `vitepress build docs` | Production static build |
| `preview` | `vitepress preview docs` | Preview the production build |

**Build output directory:** `docs/.vitepress/dist`

That folder is what Azure Static Web Apps (and any static host) should serve. It is gitignored.

## Project layout

```
.
├── docs/                      # VitePress site root
│   ├── .vitepress/
│   │   ├── config.ts          # Theme, nav, sidebar, dark dossier vibe
│   │   └── theme/             # Custom CSS (redaction bars, mono timestamps)
│   ├── public/                # Favicon, logo, OG placeholder, SWA config
│   ├── sightings/             # Sample (fictional) case files
│   ├── crash-sites/           # Recovered-tech speculation
│   ├── sources/               # Real press clippings — summarize + link out
│   │   ├── index.md
│   │   ├── CONTRIBUTING.md    # How to add the next article
│   │   └── *.md               # One page per external article
│   ├── index.md               # Home hero + feature cards
│   ├── getting-started.md
│   ├── disclosure-timeline.md
│   └── about.md
├── .github/workflows/
│   └── azure-static-web-apps-witty-desert-0e0aa7810.yml
├── package.json
└── README.md
```

## Azure Static Web Apps setup

1. **Create a Static Web App** in the Azure Portal (or via CLI).
2. Connect this GitHub repository (or deploy with a deployment token).
3. Add a repository secret named **`AZURE_STATIC_WEB_APPS_API_TOKEN_WITTY_DESERT_0E0AA7810`** with the deployment token from the Azure SWA resource (Manage deployment token).
4. Push (or merge) to `main`. The workflow in `.github/workflows/azure-static-web-apps-witty-desert-0e0aa7810.yml` builds and deploys.

### Workflow path settings (must match this repo)

| Setting | Value |
| --- | --- |
| `app_location` | `/` (repo root — where `package.json` lives) |
| `api_location` | `""` (no API) |
| `output_location` | `docs/.vitepress/dist` |
| `app_build_command` | `npm run build` |

Triggers: push to `main` only (no pull-request preview deploys).

`docs/public/staticwebapp.config.json` is copied into the build output. It sets a 404 navigation fallback only — **not** an SPA rewrite to `index.html`, so VitePress multi-page routes keep working.

## Content map

- **Home** — hero (“The skies aren't empty”), pitch, feature cards
- **Getting Started** — how to read the files
- **Sightings** — sample cases (Roswell mythos, Nimitz folklore, Midwest mosaic) — fiction
- **Crash Sites** — alloy anomalies & propulsion speculation — fiction
- **Sources** — real external articles (press/science); summarize + link out; see `docs/sources/CONTRIBUTING.md`
- **Disclosure Timeline** — cultural chronology with redaction flair
- **About** — brand and ground rules

### Adding a real article

1. Add `docs/sources/<slug>.md` with frontmatter (`title`, `date`, `outlet`, `author`, `externalUrl`, `tags`).
2. Summarize accurately; link to the original; do **not** paste full article text.
3. List it on `docs/sources/index.md` and under the **Sources** sidebar group in `docs/.vitepress/config.ts`.

Details: [`docs/sources/CONTRIBUTING.md`](docs/sources/CONTRIBUTING.md).

## License

MIT — see project license if added. Fictional dossier content is entertainment; Sources pages summarize third-party journalism and link out.
