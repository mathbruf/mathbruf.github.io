# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## 1. Project Overview

Personal portfolio for **Mathias Bruflot**, a computer science student at the
University of Bergen. Single-page React app with five sections (hero,
projects, experience, education, contact) and a deliberately opinionated
visual identity. Deployed at <https://mathbruf.github.io>.

## 2. Tech Stack

| Package                         | Version  | Purpose                              |
| ------------------------------- | -------- | ------------------------------------ |
| `vite`                          | ^5.3     | Build tool / dev server              |
| `react` + `react-dom`           | ^18.3    | UI runtime                           |
| `typescript`                    | ^5.4     | Strict-mode TS                       |
| `tailwindcss`                   | ^3.4     | Styling — fully custom theme         |
| `framer-motion`                 | ^11      | Motion primitives                    |
| `lucide-react`                  | ^0.395   | Icons (used sparingly)               |
| `clsx` + `tailwind-merge`       | ^2.1/2.4 | Class composition (`src/lib/cn.ts`)  |
| `@fontsource/instrument-serif`  | ^5       | Display + body serif                 |
| `@fontsource-variable/jetbrains-mono` | ^5 | Mono labels                          |

No router. No state library. No CSS-in-JS. No dark-mode toggle. No scroll-
progress indicator. No custom cursor.

## 3. Project Structure

```
src/
├── components/
│   ├── layout/        Navbar, Footer, SectionIndex
│   ├── sections/      Hero, Projects, Experience, Education, Contact
│   ├── motion/        RevealText, Marquee
│   └── ui/            Button, ContactLink, ProjectCard, TimelineItem,
│                      SectionHeading, Tag, Toast
├── data/              Typed content arrays (single source of truth for copy)
├── hooks/             useScrollSpy, useCopyToClipboard, useReducedMotion
├── lib/               cn (clsx+twMerge), motion (variants & easings)
├── styles/globals.css Tailwind layers + CSS color tokens
├── types/             Shared TypeScript types
├── App.tsx            Composition root
└── main.tsx           Entry — mounts <App /> and imports fonts/styles
```

`legacy/index.html` is the original single-file portfolio, retained as a
content reference only.

## 4. Design System

The full design language is documented in [`DESIGN_NOTES.md`](./DESIGN_NOTES.md).
This is a brief operator's summary — read DESIGN_NOTES before extending.

### Archetype
**Editorial Brutalist** — paper + ink + a single vermillion accent.

### Colour tokens (Tailwind classes, defined in `tailwind.config.ts`)

| Class             | Hex       | Use                                        |
| ----------------- | --------- | ------------------------------------------ |
| `bg-paper`        | `#f5f1ea` | Page background                            |
| `text-ink`        | `#0e0e0e` | Primary text, hairlines                    |
| `text-ink-soft`   | `#504e4a` | Secondary text                             |
| `text-vermillion` | `#e63946` | Accent — sparingly                         |

Hairlines use `border-ink/15`. Never use raw hex values in components.

### Type scale (caps — do not exceed)

Two families: `Instrument Serif` (everything serif/display) and
`JetBrains Mono` (every label, index, date, tag).

| Token             | Size                                | Line / Tracking      | Use                          |
| ----------------- | ----------------------------------- | -------------------- | ---------------------------- |
| `text-display-1`  | `clamp(3rem, 8vw, 7rem)`            | `0.95` / `-0.04em`   | Hero name only               |
| `text-display-2`  | `clamp(2rem, 4vw, 3.5rem)`          | `1.0` / `-0.03em`    | Section titles, edu degree   |
| `text-display-3`  | `clamp(1.375rem, 2.5vw, 1.875rem)`  | `1.05` / `-0.02em`   | Project titles, captions     |
| `text-mono-sm`    | `12px`                              | `1.4` / `0.04em`     | Card secondary, tags         |
| `text-micro`      | `11px`                              | `1.2` / `0.18em`     | Uppercase mono labels        |

The font-size tokens already carry the correct line-height and tracking. Do
not override with `leading-*` or `tracking-*` classes on display text.

### Motion primitives — `src/lib/motion.ts`

- `slideMask` — masked word reveal. Used by `RevealText`.
- `drift` — subtle upward drift + fade. Default for section content.
- `drawLine` — `scaleX 0→1` hairline draw.
- `stagger`, `fade`, easings (`easings.out`, `easings.brut`).

Reuse these. Do not inline new variants. Durations stay in the 300–500ms band
(the masked text reveal goes ~900ms because of the larger distance).

### Signature visual element

A fixed numbered rail (`SectionIndex.tsx`) on the left edge of the viewport.
Active section index + hairline turn vermillion as you scroll. The marquee
strip between hero and projects is a secondary signature. Nothing else
qualifies — no scroll-progress bar, no custom cursor, no decorative chrome.

### Contact cards

All three contact cards (Email, GitHub, LinkedIn) render through the shared
`ContactLink` component in a `grid-cols-1 md:grid-cols-3 gap-4` grid. Width,
height, padding, label size, and secondary-text size are identical across
the three. The `Social` data type carries `secondary` (always-visible mono
caption) and an optional `copy` (presence of which makes the card a
copy-to-clipboard button instead of a link).

## 5. Architectural Conventions

- **Content lives in `src/data/*.ts`** — typed against `src/types/`.
  Components must never hard-code copy, URLs, or lists.
- **Design tokens live in `tailwind.config.ts`** — never hard-code colors,
  font families, sizes, or easings inside components.
- **Motion variants live in `src/lib/motion.ts`** — reuse, don't redefine.
- **Layered components**: layout/ (chrome + signature rails), sections/
  (page sections), motion/ (motion primitives + RevealText/Marquee),
  ui/ (composable primitives).
- **All components are typed function components** with explicit `Props`
  interfaces. No `React.FC`. Named exports throughout (default export only on
  `App.tsx`).
- **Class composition**: `cn()` from `src/lib/cn.ts` (clsx + tailwind-merge).
- **Path alias `@/`** resolves to `src/`. Use it for cross-folder imports.

## 6. How to Add Content

### Add a project

```ts
// src/data/projects.ts
{
  title: 'Project Name',
  description: 'What it does and why it matters.',
  tags: ['typescript', 'postgres'],     // lowercase preferred — they render as mono
  github: 'https://github.com/mathbruf/repo',
  demo: 'https://demo.example.com',     // optional
  thumbnail: '/projects/repo.png',      // optional, place in public/projects/
},
```

### Add a job

```ts
// src/data/experience.ts
{
  period: '2024 — Now',                 // em-dash; rendered as uppercase mono
  title: 'Software Engineer Intern',
  company: 'Acme Inc.',
  description: 'Built X serving Y users.',
  url: 'https://acme.example.com',      // optional
},
```

### Add a social link

```ts
// src/data/socials.ts
import { Twitter } from 'lucide-react';

{
  label: 'Twitter',
  href: 'https://x.com/handle',
  icon: Twitter,
  secondary: '@handle',                 // shown under the label in the contact card
},
```

## 7. Commands

```bash
npm install        # install deps
npm run dev        # start dev server (http://localhost:5173)
npm run build      # type-check + production build → dist/
npm run preview    # preview the production build locally
npm run lint       # eslint
npm run format     # prettier (src/**)
```

## 8. Coding Standards

- TypeScript **strict mode** (enforced via `tsconfig.json`).
- **Named exports** preferred; default exports only for `App.tsx`.
- **Prettier**: 2-space indent, single quotes, trailing commas, print width 80.
- ESLint must pass before commit (`npm run lint`).
- No `any`. Prefer narrow types and `import type` for type-only imports.

## 9. Do / Don't for AI Assistants

✅ **Do**

- Read `DESIGN_NOTES.md` before any visual change.
- Extend motion primitives in `src/lib/motion.ts` rather than inlining.
- Add new shared types to `src/types/`.
- Treat `src/data/*.ts` as the source of truth for copy.
- Keep all contact cards uniform — route every entry through the shared
  `ContactLink` component. Do not introduce a second contact-card visual.
- Update `CLAUDE.md` and `DESIGN_NOTES.md` in the same change as any
  architectural or design system shift.

❌ **Don't**

- Do not "modernise" by reverting to a generic dark-mode + blue-accent +
  rounded-card portfolio.
- Do not push display sizes above the documented caps (`display-1` ≤ `7rem`,
  `display-2` ≤ `3.5rem`). Don't override their built-in line-height /
  letter-spacing with extra classes.
- Do not introduce new colours outside the defined palette
  (`paper / ink / ink-soft / vermillion`).
- Do not introduce new fonts without updating `DESIGN_NOTES.md`.
- Do not reintroduce a custom cursor. The native system cursor is intentional.
- Do not reintroduce a scroll-progress indicator at the top of the page.
- Do not add a router, state library, or CSS-in-JS.
- Do not bypass `cn()` / `tailwind-merge` for class composition.
- Do not hard-code copy in components.
- Do not add drop shadows, glass blur, or rounded corners > 0px on UI surfaces.

## 10. Last Updated

2026-05-10 — refinement pass (display caps reduced, scroll progress and
custom cursor removed, contact cards unified through `ContactLink`).
