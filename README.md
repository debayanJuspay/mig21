# Breeze Docs

A multilingual documentation and onboarding portal for **super.money Breeze** — an AI-powered, one-click checkout solution by Juspay for D2C and enterprise e-commerce brands.

## Features

- **10 documentation pages** covering the full merchant setup journey — from account creation to going live
- **Multilingual support** — English, Hindi, Kannada, and Bengali with language persistence via localStorage
- **Setup milestone tracker** — 8-milestone progress panel with prerequisite dependencies and celebration animations
- **Full-text search** — Cmd/Ctrl+K search across all pages, phases, and steps
- **Dark/Light theme** — dark by default with toggle, persisted across sessions
- **Embedded video tutorials** — YouTube playlists for each setup topic
- **Responsive design** — mobile-friendly with hamburger menu and slide-out sidebar
- **Hash-based SPA routing** — no page reloads, instant navigation

## Tech Stack

| Layer | Technology |
|---|---|
| Build | Vite 7 |
| Language | Vanilla JavaScript (ES Modules) |
| Styling | Vanilla CSS (CSS custom properties) |
| Fonts | DM Sans, Manrope (Google Fonts) |
| Deployment | Vercel (static) |
| Translations | Google Translate API (auto-generated) |

Zero runtime dependencies.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Translation Pipeline

Translations for Hindi, Kannada, and Bengali are auto-generated from the English source content in `app.js`.

```bash
npm run translations:build
```

This script:
- Extracts all translatable strings from the page definitions
- Translates them via the Google Translate API (3 concurrent workers with retry logic)
- Writes results to `translations.js` (incremental — only missing strings are translated)

## Project Structure

```
├── app.js                    # Main app logic, page definitions, milestones, search
├── index.html                # App shell (sidebar, header, modals, panels)
├── styles.css                # All styling — layout, theming, responsive
├── translations.js           # Auto-generated i18n strings
├── scripts/
│   └── build-translations.mjs  # Translation generation script
├── public/
│   ├── supermoney-breeze.webp
│   ├── favicon.png
│   ├── breeze-automatic.svg
│   └── cart-by-breeze-drawer.png
├── vercel.json               # Vercel rewrites (/docs/* → /)
└── package.json
```

## Deployment

The project is deployed on **Vercel** as a static site. Push to `main` to trigger a build. The `vercel.json` rewrites `/docs` and `/docs/*` to `/` so the SPA is served at both paths.

## License

Private — Juspay.
