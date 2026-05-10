# Mathias Bruflot — Portfolio

Personal portfolio site, deployed at [mathbruf.github.io](https://mathbruf.github.io).

## Tech stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## Setup

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the dev server with HMR              |
| `npm run build`   | Type-check and build for production        |
| `npm run preview` | Preview the production build locally       |
| `npm run lint`    | Run ESLint                                 |
| `npm run format`  | Format `src/` with Prettier                |

## Deploy

A GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes
the site to GitHub Pages on every push to `main`. Enable Pages → "GitHub Actions"
in the repository settings.

For Vercel or Netlify, point the project at this repo — both auto-detect Vite.

## Adding content

All copy lives in `src/data/`. To add a project:

```ts
// src/data/projects.ts
export const projects: Project[] = [
  {
    title: 'My Project',
    description: 'What it does and why it matters.',
    tags: ['TypeScript', 'React'],
    github: 'https://github.com/mathbruf/my-project',
    demo: 'https://example.com',
  },
];
```

Same pattern for `experience.ts`, `education.ts`, and `socials.ts`.
See [`CLAUDE.md`](./CLAUDE.md) for the full architectural spec.
