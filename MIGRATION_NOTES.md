# Migration Notes

This site has been refactored twice:

1. **From** the original single-file HTML/CSS portfolio (`legacy/index.html`)
   **to** a Vite + React + TypeScript + Tailwind app.
2. **From** that first React iteration's "GitHub-dark + blue accent + rounded
   cards" surface — which had collapsed into the AI-default Tailwind look —
   **to** an explicit editorial-brutalist design system documented in
   [`DESIGN_NOTES.md`](./DESIGN_NOTES.md).

The original markup is preserved at [`legacy/index.html`](./legacy/index.html)
as a content reference only. None of its visual decisions carry forward.

## Visual break from the original

| Aspect          | Original / first React pass                  | Current                                                               |
| --------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| Theme           | Dark `#0d1117` background                    | Paper `#f5f1ea` (warm cream). No dark mode.                           |
| Accent          | GitHub blue `#58a6ff`                        | Vermillion `#e63946` — used sparingly                                 |
| Display family  | Manrope / Fraunces / Space Grotesk           | Instrument Serif (display + body) / JetBrains Mono (labels)           |
| Hero            | Centred name + two pill buttons              | Full-bleed serif name as art (`clamp(3.25rem, 16vw, 16rem)`)          |
| Project layout  | Card grid with `translateY(-3px)` hover      | List of rows separated by hairline rules (no cards)                   |
| Experience      | Vertical line + dot timeline                 | Two-column editorial spread (mono date | content)                     |
| Section dividers| Plain border-top                             | Numbered rail signature + scrolling marquee strip between hero/work   |
| Motion          | Ad-hoc fade-up at each component             | Three reusable primitives (`slideMask`, `drift`, `drawLine`)          |
| Surfaces        | `bg-surface` + `border-border` rounded cards | Paper background + `border-ink/15` hairlines, no fills                |
| Buttons         | Pill backgrounds                             | Underline-swap text links (mono micro)                                |
| Theme toggle    | Yes (next-themes-style)                      | Removed — single-mode commitment                                      |

## What is preserved

- Content (name, tagline, education, contact info — in `src/data/*.ts`).
- Stack (Vite, React 18, TS, Tailwind, Framer Motion, Lucide).
- File-tree shape under `src/components/{layout,sections,ui}/` (with
  `motion/` added).
- Accessibility commitments (focus rings, semantic landmarks, reduced-motion
  support).
- The GitHub Actions deploy workflow.

## Adding content (cheat sheet)

| To add a...   | Edit                       |
| ------------- | -------------------------- |
| Project       | `src/data/projects.ts`     |
| Job           | `src/data/experience.ts`   |
| Degree        | `src/data/education.ts`    |
| Social link   | `src/data/socials.ts`      |

No component changes required for content additions.
