# Mathias Bruflot — Portfolio

Personal portfolio site, deployed at [mathbruf.github.io](https://mathbruf.github.io).

> An editorial-brutalist design system: paper-and-ink palette, one
> vermillion accent, Instrument Serif at display sizes, JetBrains Mono for
> every label. See [`DESIGN_NOTES.md`](./DESIGN_NOTES.md) before changing
> any visual.

## Tech stack

- **Vite** + **React 18** + **TypeScript** (strict)
- **Tailwind CSS** with a fully custom theme (`tailwind.config.ts`)
- **Framer Motion** with reusable variants in `src/lib/motion.ts`
- **Lucide React** for icons (used sparingly)
- **clsx** + **tailwind-merge** via `src/lib/cn.ts`
- **@fontsource** for self-hosted fonts (no Google Fonts CDN)

## Setup

```bash
npm install
npm run dev
```

Dev server: <http://localhost:5173>.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Vite dev server with HMR             |
| `npm run build`   | `tsc` + production build → `dist/`   |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | ESLint                               |
| `npm run format`  | Prettier (`src/**`)                  |

## Deploy

`.github/workflows/deploy.yml` builds and publishes the site to GitHub Pages
on every push to `main`. In the repo settings, set Pages → Source to
"GitHub Actions".

For Vercel, point the project at this repo — it auto-detects Vite. Build
command: `npm run build`. Output directory: `dist/`.

## Adding content

All copy lives in `src/data/`. To add a project:

```ts
// src/data/projects.ts
{
  title: 'My Project',
  description: 'What it does and why it matters.',
  tags: ['typescript', 'react'],
  github: 'https://github.com/mathbruf/repo',
  demo: 'https://demo.example.com',
}
```

Same pattern for `experience.ts`, `education.ts`, `socials.ts`.

See [`CLAUDE.md`](./CLAUDE.md) for the full architectural spec and
[`DESIGN_NOTES.md`](./DESIGN_NOTES.md) for the design language.
