# Charlie Loughran — Portfolio

Personal portfolio site for Charlie Loughran, UX/UI Designer.

Built with [Astro](https://astro.build), SCSS, and TypeScript. Case
studies are managed as Markdown content collections. End-to-end tests
use [Playwright](https://playwright.dev). Deploys to Netlify.

## Getting started

```bash
npm install
npm run dev      # start the local dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build locally
npm run test     # run the Playwright e2e test suite
```

## Editing content

See [CONTENT.md](./CONTENT.md) for a plain-English guide to adding
case studies, updating images and the CV, and changing design tokens
like colours and spacing — no coding experience required.

## Project structure

- `src/components/` — UI components (Astro)
- `src/layouts/` — page layout / shared `<head>`
- `src/pages/` — routes (homepage, case study pages, 404)
- `src/content/projects/` — case study content (Markdown)
- `src/styles/` — SCSS design tokens and partials
- `src/scripts/` — small progressive-enhancement scripts
- `public/` — static assets (images, favicons, CV)
- `tests/` — Playwright e2e tests
