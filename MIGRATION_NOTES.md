# Migration Notes

This project was refactored from a single-file HTML/CSS portfolio into a
Vite + React + TypeScript + Tailwind app.

The original file is preserved at [`legacy/index.html`](./legacy/index.html) for reference.

## What changed

- **Architecture**: monolithic HTML → modular React components.
- **Styling**: hand-written CSS variables → Tailwind theme tokens. CSS variables
  are still the source of truth for color values, exposed to Tailwind in
  `tailwind.config.ts` via `rgb(var(--color-x) / <alpha-value>)`.
- **Content**: hard-coded markup → typed data arrays in `src/data/`.
- **Icons**: emoji (🎓, ✉️, 🐙, 💼) → Lucide React (`GraduationCap`, `Mail`,
  `Github`, `Linkedin`).
- **Animations**: none → Framer Motion (fade/slide on scroll, hover, stagger,
  scroll progress bar) — all respect `prefers-reduced-motion`.
- **New features**: theme toggle (dark/light), scroll-spy active nav, mobile
  hamburger menu, copy-email button with toast, availability badge, animated
  gradient mesh background, scroll progress bar at top of page.
- **SEO/perf**: Open Graph + Twitter card meta tags, theme-color, sitemap,
  robots.txt, lazy-loaded images, self-hosted fonts via `@fontsource-variable`.

## Color palette mapping

CSS variables in the original → Tailwind tokens (`tailwind.config.ts`):

| Original variable      | Hex       | Tailwind token              |
| ---------------------- | --------- | --------------------------- |
| `--bg`                 | `#0d1117` | `bg-bg`                     |
| `--surface`            | `#161b22` | `bg-surface`                |
| `--border`             | `#21262d` | `border-border`             |
| `--accent`             | `#58a6ff` | `text-accent` / `bg-accent` |
| `--accent-dim`         | `#1f6feb` | `text-accent-dim`           |
| `--text`               | `#e6edf3` | `text-fg`                   |
| `--muted`              | `#8b949e` | `text-muted`                |
| `--tag`                | `#1c2b3a` | `bg-tag`                    |

A light-theme variant is defined in `src/styles/globals.css` under `:root.light`.

## Adding content (cheat sheet)

| To add a...   | Edit                       |
| ------------- | -------------------------- |
| Project       | `src/data/projects.ts`     |
| Job           | `src/data/experience.ts`   |
| Degree        | `src/data/education.ts`    |
| Social link   | `src/data/socials.ts`      |

No component changes required for content additions.
