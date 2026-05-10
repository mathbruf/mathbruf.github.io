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
on every push to `main`. In repo settings, set Pages → Source to
"GitHub Actions".

For Vercel, point the project at this repo — it auto-detects Vite. Build
command: `npm run build`. Output directory: `dist/`.

## Content

Where each piece of copy lives:

| Piece                     | File                                                                |
| ------------------------- | ------------------------------------------------------------------- |
| Hero intro paragraph      | `src/components/sections/Hero.tsx` (inline)                         |
| About bio                 | `src/components/sections/About.tsx` (inline)                        |
| Experience entries        | `src/data/experience.ts`                                            |
| Education entries         | `src/data/education.ts` (use `details` for the "Read more" block)   |
| Projects (work)           | **Live from GitHub** — see below                                    |
| Contact links             | `src/data/socials.ts`                                               |
| Section title / labels    | Each section component, via the `<SectionHeading>` props            |
| Footer colophon           | `src/components/layout/Footer.tsx` (inline)                         |
| Marquee divider text      | `src/App.tsx` — `<Marquee text="…" />`                              |

### Projects: live from GitHub

The Projects section fetches `https://api.github.com/users/mathbruf/repos`
on mount, filters out forks / archived repos / the profile-readme repo,
sorts by recent push, and shows the top 6. To pin specific repos:

```ts
// src/data/projects.ts
export const featuredRepoNames: string[] = [
  'my-headline-repo',
];
```

The fetch is cached in `sessionStorage` for 10 minutes
(`mb-github-repos`) to stay under the unauthenticated rate limit during
development reloads. Change `GITHUB_USERNAME` in the same file to point
the section at a different account.

See [`CLAUDE.md`](./CLAUDE.md) for the full architectural spec and
[`DESIGN_NOTES.md`](./DESIGN_NOTES.md) for the design language.
