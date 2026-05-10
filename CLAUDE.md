# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## 1. Project Overview

Personal portfolio for **Mathias Bruflot**, a computer science student at the
University of Bergen. Single-page React app with six sections in order:

1. **Hero** — full-bleed name as art + short personal intro
2. **About** — longer bio drawn from CV + cover letter
3. **Experience** — career history from CV
4. **Education** — degrees, with an expandable details block on the bachelor's
5. **Projects** — **live** from GitHub (`fetchPinnedRepos('mathbruf')`)
6. **Contact** — three uniform `ContactLink` cards

Deployed at <https://mathbruf.github.io>.

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
│   ├── sections/      Hero, About, Experience, Education, Projects, Contact
│   ├── motion/        RevealText, Marquee
│   └── ui/            Button, ContactLink, ProjectCard, TimelineItem,
│                      SectionHeading, Tag, Toast
├── data/              projects (live config), experience, education, socials
├── hooks/             useScrollSpy, useCopyToClipboard, useReducedMotion,
│                      useGithubRepos
├── lib/               cn (clsx+twMerge), motion (variants & easings),
│                      github (fetchPinnedRepos with sessionStorage cache)
├── styles/globals.css Tailwind layers + CSS color tokens
├── types/             Shared TypeScript types (Project, ExperienceItem,
│                      EducationItem, Social, SectionId, Repo)
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

Reuse these. Do not inline new variants.

### Signature visual element

A fixed numbered rail (`SectionIndex.tsx`) on the left edge of the viewport.
Active section index + hairline turn vermillion as you scroll. The rail now
holds **6 entries** (`00 — 05`): Index, About, Work, Studies, Code, Contact.
The marquee strip between hero and about is a secondary signature.

### Contact cards

All three contact cards (Email, GitHub, LinkedIn) render through the shared
`ContactLink` component in a `grid-cols-1 md:grid-cols-3 gap-4` grid. Width,
height, padding, label size, and secondary-text size are identical. The
`Social` data type carries `secondary` (always-visible mono caption) and an
optional `copy` (presence makes the card a copy-to-clipboard button).

## 5. Architectural Conventions

- **Static content lives in `src/data/*.ts`** — typed against `src/types/`.
  Components must never hard-code copy, URLs, or lists.
- **Projects are loaded live** at runtime from GitHub via
  `src/lib/github.ts → fetchPinnedRepos`. The data file
  `src/data/projects.ts` only exports `GITHUB_USERNAME` and an optional
  `featuredRepoNames` curation list.
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

### Add or update a job

```ts
// src/data/experience.ts — order most-recent first
{
  period: '2024 — Now',                 // em-dash; rendered uppercase mono
  title: 'Software Engineer Intern',
  company: 'Acme Inc.',
  location: 'Oslo',                     // optional, appended after company
  description: 'Built X serving Y users.',
  bullets: [                            // optional 2–4 achievement bullets
    'Shipped feature A used by N teams.',
    'Reduced p95 latency by Z%.',
  ],
  url: 'https://acme.example.com',      // optional, makes company name a link
}
```

### Add or update a degree

```ts
// src/data/education.ts — order most-recent first
{
  period: 'Aug 2024 — Present',
  degree: "Bachelor's in Computer Engineering (Datateknologi)",
  school: 'University of Bergen (UiB)',
  description: 'Short, one-line description shown in the card.',
  details:                              // optional — turns on "Read more"
    'Longer programme description that slides down when expanded.',
}
```

Setting `details` adds the expandable "Read more ↓" toggle on that row.

### Curate (or pin) projects

Projects come **live from GitHub** for `mathbruf`, filtered to exclude
archived repos and the profile-readme repo. Forks are included since they
often represent coursework / learning. Top 6 by `pushed_at` are shown.

To pin specific repos at the top:

```ts
// src/data/projects.ts
export const featuredRepoNames: string[] = [
  'my-headline-repo',
  'another-good-one',
];
```

Pinned repos appear first in the listed order; remaining slots fill with
the most recently updated repos. To change which GitHub user the section
points at, edit `GITHUB_USERNAME` in the same file.

The fetch is cached in `sessionStorage` for 10 minutes (`mb-github-repos`)
to avoid hitting GitHub's unauthenticated rate limit during dev reloads.
Clear it via `sessionStorage.removeItem('mb-github-repos')` if you need a
fresh fetch.

### Add a social link

```ts
// src/data/socials.ts
import { Twitter } from 'lucide-react';

{
  label: 'Twitter',
  href: 'https://x.com/handle',
  icon: Twitter,
  secondary: '@handle',                 // mono caption shown under the label
}
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
- Treat `src/data/*.ts` as the source of truth for static copy. Treat the
  GitHub API response as the source of truth for projects.
- Keep all contact cards uniform — route every entry through `ContactLink`.
- Update `CLAUDE.md` and `DESIGN_NOTES.md` in the same change as any
  architectural or design system shift.

❌ **Don't**

- Do not "modernise" by reverting to a generic dark-mode + blue-accent +
  rounded-card portfolio.
- Do not push display sizes above the documented caps. Don't override their
  built-in line-height / letter-spacing with extra classes.
- Do not introduce new colours outside `paper / ink / ink-soft / vermillion`.
- Do not introduce new fonts without updating `DESIGN_NOTES.md`.
- Do not reintroduce a custom cursor or scroll-progress indicator.
- Do not add a router, state library, or CSS-in-JS.
- Do not bypass `cn()` / `tailwind-merge` for class composition.
- Do not hard-code project lists in components — they're fetched live.
- Do not invent biographical facts. Source from the CV / cover letter PDFs
  in the project root, or leave a `// TODO: confirm` marker.
- Do not add drop shadows, glass blur, or rounded corners > 0px on UI
  surfaces.

## 11. Internationalisation

The site is bilingual (English + Norwegian). `src/lib/i18n.tsx` owns:

- `LangProvider` — wraps `<App>`, carries `lang` and persists to
  `localStorage` (`mb-lang`). Defaults to browser locale.
- `useLang()` — returns `{ lang, setLang, toggle }`.
- `useT()` — returns a `t()` function bound to current language. Pass it a
  `string` or a `{ en, no }` object; it returns the right string.
- `Loc = string | { en, no }` — the shape used for translatable fields in
  `src/types/` and `src/data/`.

Patterns:

- **Static strings**: pass `Loc` to UI primitives (`SectionHeading`,
  `TimelineItem`, `ContactLink`) — they call `useT()` internally.
- **Prose with inline emphasis**: render conditionally on `useLang().lang`
  in the section component (Hero, About).
- **Data files** (`experience.ts`, `education.ts`, `socials.ts`): every
  translatable field is `{ en, no }`. Untranslated fields (URLs, brand
  names like "SSP", "echo") stay as plain strings.

To add a new translatable string: extend the `Loc` field in the type or
data, and wherever it's rendered, the existing `t()` calls handle it.

## 12. Last Updated

2026-05-10 — bilingual + portrait pass: EN/NO language switch via
`src/lib/i18n.tsx`, portrait added at the top of the hero, marquee divider
between hero and about replaced with a hairline rule, all internship
references stripped from the page.
