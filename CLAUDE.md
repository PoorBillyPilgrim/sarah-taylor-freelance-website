# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev              # Start local development server
yarn build            # Build static site for production
yarn build-and-serve  # Build and serve static output locally (uses ./out)
yarn lint             # Run ESLint
yarn lint:fix         # Auto-fix linting issues
```

No test suite is configured.

## Architecture

This is a **Next.js 15 static site** (`output: "export"`) deployed to GitHub Pages. It's a freelance portfolio website for copywriter Sarah M. Taylor.

**Key architectural points:**

- **Static export only** — no SSR, no API routes. The only backend is an AWS Lambda contact form endpoint.
- **Environment-aware paths** — `SITE_ENV` controls the `basePath`/`assetPrefix`. `staging` deploys under `/sarah-taylor-freelance-website`, `prod`/`dev` deploy to root. Use `app/utils.ts:getSrc()` whenever constructing asset paths.
- **Styling via Mantine** — all components use Mantine v8. Avoid raw CSS where possible; use Mantine component props, `theme.ts` tokens, and CSS Modules for component-scoped overrides. Custom breakpoints are defined in `postcss.config.cjs`.
- **Custom theme** — defined in `theme.ts`. Primary color is orange (`#ee6628`). Body font is Mont-Light, headings use Mont-Heavy. Custom fonts live in `public/fonts/`.
- **Page structure** — `app/page.tsx` is the home page and composes all sections. `components/AppLayout.tsx` wraps everything with Header, Footer, and a scroll-to-top button.

## Directory Structure

```
app/               # Next.js app router pages and root layout
components/        # All UI components, organized by section (hero/, services/, projects/, quotes/, etc.)
public/            # Static assets: images/, icons/, fonts/, PDFs
theme.ts           # Mantine theme configuration
next.config.mjs    # Next.js config with environment-aware basePath logic
postcss.config.cjs # PostCSS with Mantine preset and custom breakpoints
```

## Environment

`.env` sets `SITE_ENV=dev` locally. CI (`deploy.yml`) sets `SITE_ENV=prod` and deploys the `./out` directory to GitHub Pages on push to `master`.

The contact form posts to a hardcoded AWS Lambda URL in the contact page component. It includes a honeypot `company` field for bot prevention.
