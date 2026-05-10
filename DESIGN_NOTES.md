# Design Notes — Mathias Bruflot Portfolio

## Archetype

**Option A — Editorial Brutalist.**

The previous iteration (a dark UI with a GitHub-blue accent and rounded
surfaces) had collapsed into the default look that AI-assisted Tailwind
projects tend to converge on. To break that pull, the portfolio commits
fully to an editorial-brutalist register — the visual language of printed
matter rather than dashboard chrome.

Concretely that means: paper-and-ink palette, one disciplined accent, hard
edges, no drop shadows, large (but composed) serif display type set against
tight mono labels, and section layouts that read as magazine spreads (rules
between rows, big numbered indices) instead of card grids.

## Palette

All values live in `src/styles/globals.css` as CSS variables and are exposed
to Tailwind in `tailwind.config.ts`. Components must reference the tokens
(`bg-paper`, `text-ink`, `text-vermillion`, `border-ink/15`) — never hex
literals.

| Token             | Hex       | RGB              | Use                                                |
| ----------------- | --------- | ---------------- | -------------------------------------------------- |
| `paper`           | `#f5f1ea` | `245 241 234`    | Page background. Warm cream, never pure white.     |
| `ink`             | `#0e0e0e` | `14 14 14`       | Primary text, hairlines, primary fills.            |
| `ink-soft`        | `#504e4a` | `80 78 74`       | Secondary text, italic tagline body.               |
| `vermillion`      | `#e63946` | `230 57 70`      | THE accent. Used sparingly: name period, active    |
|                   |           |                  | section index, hover state.                        |

There is **no dark theme**. Editorial brutalism is paper-and-ink — the
commitment is the design statement.

`*:focus-visible` rings are vermillion to keep keyboard navigation legible
without breaking the palette.

## Type scale

Two families, no third option.

| Family             | Use                                                                |
| ------------------ | ------------------------------------------------------------------ |
| `Instrument Serif` | Body, all display sizes, italic accents. Loaded as `400` + `400i`. |
| `JetBrains Mono`   | Indices, dates, labels, navigation, tags, footer colophon.         |

Custom Tailwind sizes (`tailwind.config.ts → fontSize`) — these are the **caps**.
Do not push display sizes above these values.

| Token             | Size                          | Line / Tracking          | Where it appears                       |
| ----------------- | ----------------------------- | ------------------------ | -------------------------------------- |
| `display-1`       | `clamp(3rem, 8vw, 7rem)`      | `0.95` / `-0.04em`       | Hero name only.                        |
| `display-2`       | `clamp(2rem, 4vw, 3.5rem)`    | `1.0` / `-0.03em`        | Section titles, education degree.      |
| `display-3`       | `clamp(1.375rem, 2.5vw, 1.875rem)` | `1.05` / `-0.02em`  | Project titles, italic captions.       |
| `mono-sm` (12px)  | `12px`                        | `1.4` / `0.04em`         | Card secondary text, tags, dates.      |
| `micro` (11px)    | `11px`                        | `1.2` / `0.18em`         | All-caps mono labels.                  |

Typographic rules:

- Letter-spacing on display sizes is **always negative**, in the range
  `-0.02em` to `-0.04em`. Never positive on display.
- Display line-height stays in `0.95–1.05`.
- Body and italic copy use `max-w-measure` (60ch) — never a wider line length.
- The hero name's full stop is the only place vermillion intersects with
  display type. Do not extend that pattern.

## Motion language

Three reusable primitives in `src/lib/motion.ts`. New animations should reuse
or extend these — do not inline new ad-hoc variants.

| Primitive   | Behaviour                                                                              |
| ----------- | -------------------------------------------------------------------------------------- |
| `slideMask` | Word/line slides up from `y: 110%` behind an `overflow-hidden` mask. Used by `RevealText`. The hero name uses this. |
| `drift`     | Subtle 18px upward drift + opacity fade. The default for in-view section content.      |
| `drawLine`  | `scaleX 0 → 1` from left, used for hairline reveals (e.g. SectionHeading rule).        |

Easing curves (also in `motion.ts`):

- `easings.out` = `cubic-bezier(0.16, 1, 0.3, 1)` — soft, decisive landing.
- `easings.brut` = `cubic-bezier(0.65, 0, 0.35, 1)` — sharper, used for the rule line draw.

Quiet motion: durations stay in the 300–500ms band (longer only for masked
text reveal at ~900ms because the larger movement needs more time to read).
No bouncing, no large translate distances.

`useReducedMotion()` (in `src/hooks/`) is consulted by `Marquee` so the strip
freezes under `prefers-reduced-motion: reduce`. The global CSS rule in
`globals.css` handles everything else.

## Signature visual element

**A fixed numbered rail on the left edge of the viewport** —
`src/components/layout/SectionIndex.tsx`. Five entries (`00 — 04`), each is a
mono index + a hairline. The active section's index turns vermillion and the
hairline grows from 12px to 40px. It's the page's vertical axis: present from
hero through contact, sticky, anchored, and the only element that actively
recolours as you scroll.

Secondary signature: a single **scrolling marquee strip** between the hero and
projects (`MATHIAS BRUFLOT — DATATEKNOLOGI — BERGEN, NO — PORTFOLIO 2026`,
italic serif at `text-3xl/5xl`, vermillion glyph separator). Editorial page
turn.

There is **no scroll-progress indicator**, **no custom cursor**, and **no
glassmorphism / blur surface**. The system cursor is intentional. Quiet beats
expressive everywhere.

## Inspiration

- **Pentagram** (Paula Scher's editorial typography, magazine-spread sectioning).
- **Bureau Borsche** (rigorous numbered systems, mono-with-serif lockups).
- **Rauno** (rauno.me) — the precision of mono micro-type used as structural
  scaffolding around oversized serif/sans display.
- **Linear's brand site** (early versions) — single-accent restraint.
- **Werkplaats Typografie** publications — the "set in" colophon habit, list
  layouts in place of card grids.

## What this design refuses to do

- No card grids with `translateY(-3px)` hover.
- No GitHub blue, no cobalt, no purple gradients, no glass cards.
- No drop shadows. No rounded corners larger than `0`.
- No second sans-serif beyond JetBrains Mono. No third font.
- No icon-heavy UI — Lucide icons are used sparingly (arrows, mail/copy), and
  always paired with mono text.
- No buttons that look like buttons. CTA-style text uses underline-swap
  animations, not pill backgrounds.
- No scroll-progress bar at the top of the page.
- No custom cursor — the native system cursor is the brief.

## Refinement notes

### 2026-05-10 — Bilingual + portrait pass
- **EN / NO language switch.** A small `LangProvider` (`src/lib/i18n.tsx`)
  carries `lang: 'en' | 'no'`, persists to `localStorage` (`mb-lang`), and
  defaults to the browser locale (`en-*` → English, otherwise Norwegian).
  All translatable copy uses the `Loc = string | { en, no }` shape and is
  rendered through `useT()`. The toggle (`EN / NO`) lives in the navbar on
  desktop and mobile. The active language is also set on `<html lang="…">`
  for accessibility.
- **Portrait added.** A 272×272 JPG (`public/portrait.jpg`) sits in the
  top-left corner of the hero composition at `w-20 / md:w-24` with a
  `border-ink/20` hairline. It anchors the page without competing with the
  big serif name.
- **Marquee retired.** The italic-serif scrolling strip between hero and
  about is gone. A simple full-width `h-px bg-ink/15` divider replaces it.
  Cleaner page rhythm; quieter rhythm to match the rest of the design.
- **All internship references removed** — the "AVAILABLE FOR INTERNSHIPS"
  badge, the hero tagline's third sentence, and the contact-section caption
  no longer mention internships. The contact caption now reads "Open to
  collaborations, conversations, or anything about building software well."

### 2026-05-10 — Content-population pass
- **Page reordered.** New flow: Hero → About → Experience → Education →
  Projects → Contact. The numbered rail now spans `00 — 05` (one extra
  entry for the new About section).
- **Hero subtitle replaced.** The "Computer science student building
  software… quietly, and well." italic strapline is gone. In its place: a
  three-sentence first-person intro drawn from the CV + cover letter,
  ending on what Mathias is currently working toward (summer-2026
  internship).
- **About section added.** Three-paragraph bio (also first-person, drawn
  from the CV + cover letter). Same two-column rhythm as Experience and
  Education — mono `↳ BIO` label on the left, prose on the right.
- **Education has an expandable details block.** The bachelor's row shows
  a short description and a "Read more ↓" toggle that slides a longer
  programme description down with a Framer Motion `height: auto` reveal.
  Honours `prefers-reduced-motion` (instant toggle).
- **Projects are live from GitHub.** No more static placeholder cards. A
  new `src/lib/github.ts` fetches `/users/mathbruf/repos`, filters out
  forks / archived / the profile-readme repo, sorts by `pushed_at`, and
  caches in `sessionStorage` for 10 minutes. The section renders
  skeletons during loading and a graceful error state if the API is
  unreachable. `featuredRepoNames` in `src/data/projects.ts` allows
  pinning specific repos at the top.

### 2026-05-10 — Tone-down pass
- **Display caps reduced.** `display-1` capped at `7rem` (was `16rem`),
  `display-2` at `3.5rem` (was `6rem`). Hero now reads as composed rather
  than shouting. Removed the bespoke `tracking-ultratight` utility — the new
  font-size tokens carry their own tracking (`-0.04em` / `-0.03em` / `-0.02em`)
  so per-element overrides aren't needed.
- **Removed scroll-progress bar.** A vermillion 1px bar at the top of the
  page was a low-value accent that competed with the section-index rail.
  Deleted `components/layout/ScrollProgress.tsx` and its mount.
- **Removed custom cursor.** A black square that followed the pointer added
  visual noise without earning its keep. Deleted
  `components/motion/Cursor.tsx`. The system cursor is restored. The
  signature element remains the numbered rail (it always was the primary —
  the cursor was tertiary in the previous spec and is now gone outright).
- **Contact section uniform grid.** Replaced the asymmetric "big email +
  list of socials" layout with a 3-column grid of identical cells driven by
  a single shared `ContactLink` component (`components/ui/ContactLink.tsx`).
  Width, height, padding, label size, and secondary-text size now match
  exactly — divergence between Email/GitHub/LinkedIn cards is structurally
  impossible. Email shows `EMAIL` (label) over `mathbruf@hotmail.com`
  (mono-sm secondary, `truncate` as a safety net).
