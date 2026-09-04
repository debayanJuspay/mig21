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
| Testing | Vitest |

Zero runtime dependencies.

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server (localhost:3000)
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview

# Run tests
pnpm test
```

## Testing

The project uses **Vitest** for unit testing. Tests cover the pure, testable logic extracted into `utils.js` as well as the key UI behaviors.

```bash
pnpm test          # Run all tests once (verbose reporter)
pnpm test:watch    # Run tests in watch mode
```

Test files live in `__tests/` and cover:

- **Video playlist matching** — embed/watch URL generation for playlists vs. single videos, title resolution and translation
- **Milestone tier matching** — locking, activation, and completion states based on prerequisite dependencies
- **Milestone on-click confetti** — burst count, angle spread, distance variation, and rotating color palette
- **Dark/Light theme** — theme resolution (dark by default) and color-palette keys
- **Color coding** — accent color differences between themes, brand palette selection
- **Font family styles** — Manrope headings, DM Sans body, consistency across themes
- **Core utilities** — slugging, translations, hash parsing, language validation, milestone state, cascade uncheck, and full-text search

The `vitest.config.js` sets the default reporter to verbose, so every test name is printed individually on each run.

### Git Hooks

A **Husky** pre-commit hook runs **lint-staged**, which executes the test suite on staged JavaScript files before every commit. If a test fails, the commit is blocked until it passes.

## Translation Pipeline

Translations for Hindi, Kannada, and Bengali are auto-generated from the English source content in `app.js`.

```bash
pnpm translations:build
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
├── utils.js                  # Pure, testable helper functions
├── vitest.config.js          # Vitest config (verbose reporter)
├── __tests__/
│   ├── utils.test.js         # Unit tests for core utilities
│   └── features.test.js      # Tests for video, milestones, theme, fonts
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

## Test Coverage

Current test suite: **72 tests across 2 files**, all passing.

| Area | Test count |
|---|---|
| Core utilities (`utils.test.js`) | 36 |
| Video, milestones, theme, fonts (`features.test.js`) | 36 |

## Deployment

The project is deployed on **Vercel** as a static site. Push to `main` to trigger a build. The `vercel.json` rewrites `/docs` and `/docs/*` to `/` so the SPA is served at both paths.

## License

Private — Juspay.
