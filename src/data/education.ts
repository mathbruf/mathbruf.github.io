import type { EducationItem } from '@/types';

/**
 * Education entries from the CV (CV Mathias Bruflot.pdf, 2026).
 * Most recent first. The first entry has an expandable `details` block
 * with publicly-available programme info from UiB.
 */
export const education: EducationItem[] = [
  {
    period: { en: 'Aug 2024 — Present', no: 'aug. 2024 — d.d.' },
    degree: {
      en: 'Bachelor in Datateknologi',
      no: 'Bachelor i datateknologi',
    },
    school: {
      en: 'University of Bergen (UiB)',
      no: 'Universitetet i Bergen (UiB)',
    },
    description: {
      en: 'Currently in the second year.',
      no: 'Går nå andre studieår.',
    },
    details: {
      en: 'A 3-year, 180-ECTS bachelor programme covering programming, algorithms and data structures, mathematics, databases, operating systems, and software engineering. Typical career paths run into software engineering and systems development.',
      no: 'Treårig bachelorprogram (180 studiepoeng) som dekker programmering, algoritmer og datastrukturer, matematikk, databaser, operativsystemer og systemutvikling. Vanlige karriereveier går mot programvareutvikling og systemarbeid.',
    },
  },
  {
    period: { en: 'Aug 2022 — Jun 2024', no: 'aug. 2022 — juni 2024' },
    degree: {
      en: 'Economics — yearly unit (årsenhet)',
      no: 'Samfunnsøkonomi, årsenhet',
    },
    school: {
      en: 'University of Oslo, Faculty of Social Sciences',
      no: 'Universitetet i Oslo, Samfunnsvitenskapelig fakultet',
    },
    description: {
      en: 'Foundational economics coursework (samfunnsøkonomi); paused for compulsory military service in 2023.',
      no: 'Grunnleggende samfunnsøkonomi; permisjon for førstegangstjenesten i 2023.',
    },
  },
  {
    period: { en: 'Aug 2019 — Jun 2022', no: 'aug. 2019 — juni 2022' },
    degree: { en: 'Sciences track (Realfagslinjen)', no: 'Realfagslinjen' },
    school: 'Lillestrøm Videregående Skole',
    description: {
      en: 'Physics 1–2, chemistry, IT 1–2, R-mathematics 1–2.',
      no: 'Fysikk 1–2, kjemi, IT 1–2 og R-matematikk 1–2.',
    },
  },
];
