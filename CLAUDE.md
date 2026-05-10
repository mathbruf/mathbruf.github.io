# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## 1. Project Overview

Personal portfolio for **Mathias Bruflot**, a computer science student at the
University of Bergen. Single-page React app with sections for projects,
experience, education, and contact. Deployed at <https://mathbruf.github.io>.

## 2. Tech Stack

- **Vite** ^5.3 — build tool
- **React** ^18.3 + **TypeScript** ^5.4 — UI runtime, strict mode
- **Tailwind CSS** ^3.4 — styling (dark/light theme via class)
- **Framer Motion** ^11 — animations
- **Lucide React** ^0.395 — icons
- **@fontsource-variable/inter** + **space-grotesk** — self-hosted fonts
- **ESLint** ^8 + **Prettier** ^3 — lint/format

No router; the site is single-page with anchor navigation.

## 3. Project Structure

```
src/
├── components/
│   ├── layout/        Navbar, Footer
│   ├── sections/      Hero, Projects, Experience, Education, Contact
│   └── ui/            Reusable primitives (Button, ProjectCard, Tag, ...)
├── data/              Typed content arrays — single source of truth for copy
├── hooks/             useScrollSpy, useCopyToClipboard, useTheme
├── styles/globals.css Tailwind layers + CSS color tokens (dark/light)
├── types/             Shared TypeScript types (Project, ExperienceItem, ...)
├── App.tsx            Composition root
└── main.tsx           Entry — mounts <App /> and imports fonts/styles
```

`legacy/index.html` is the pre-refactor portfolio, kept for reference.

## 4. Architectural Conventions

- **Content lives in `src/data/*.ts`.** Components must never hard-code copy,
  URLs, project lists, or social links. Data is typed against `src/types/`.
- **UI primitives** go in `components/ui/`; **page sections** in
  `components/sections/`; **layout chrome** in `components/layout/`.
- **All components are typed function components** with explicit `Props`
  interfaces. No `React.FC`.
- **Tailwind theme tokens** (defined in `tailwind.config.ts`) replace raw color
  values. Use `bg-bg`, `text-fg`, `text-muted`, `text-accent`, `bg-surface`,
  `border-border`, `bg-tag` — never hex literals.
- **Animations use Framer Motion variants** and respect `prefers-reduced-motion`
  (handled globally in `globals.css`).
- **Path alias `@/`** resolves to `src/`. Use it for cross-folder imports.

## 5. How to Add Content

### Add a project

```ts
// src/data/projects.ts
{
  title: 'Project Name',
  description: 'What it does and why it matters.',
  tags: ['TypeScript', 'React'],
  github: 'https://github.com/mathbruf/repo',
  demo: 'https://demo.example.com',   // optional
  thumbnail: '/projects/repo.png',    // optional, place file in public/projects/
},
```

### Add a job

```ts
// src/data/experience.ts
{
  period: '2024 – Now',
  title: 'Software Engineer Intern',
  company: 'Acme Inc.',
  description: 'Built X serving Y users.',
  url: 'https://acme.example.com',    // optional
},
```

### Add a social link

```ts
// src/data/socials.ts
import { Twitter } from 'lucide-react';

{ label: 'Twitter', href: 'https://x.com/handle', icon: Twitter },
```

## 6. Commands

```bash
npm install        # install deps
npm run dev        # start dev server (http://localhost:5173)
npm run build      # type-check + production build → dist/
npm run preview    # preview the production build locally
npm run lint       # eslint
npm run format     # prettier
```

## 7. Coding Standards

- TypeScript **strict mode** (enforced via `tsconfig.json`).
- **Named exports** preferred; default exports only for `App.tsx`.
- **Prettier**: 2-space indent, single quotes, trailing commas, print width 80.
- ESLint must pass before commit (`npm run lint`).
- No `any`. Prefer narrow types and `import type` for type-only imports.

## 8. Do / Don't for AI Assistants

✅ **Do**

- Keep changes scoped to the requested area.
- Update `CLAUDE.md` when architecture, file structure, or conventions change.
- Add new shared types to `src/types/`.
- Treat `src/data/*.ts` as the source of truth for copy.

❌ **Don't**

- Introduce new dependencies without justification (bundle size matters).
- Hard-code copy, URLs, or content in components.
- Bypass the data layer by inlining lists in section components.
- Add a router, state library, or CSS-in-JS — the stack is intentionally lean.
- Replace Tailwind tokens with raw hex values.

## 9. Migration Notes

This project was refactored from a single-file HTML portfolio. See
[`MIGRATION_NOTES.md`](./MIGRATION_NOTES.md) for the color-palette mapping and
the diff in features.

## 10. Last Updated

2026-05-10
