import type { ExperienceItem } from '@/types';

/**
 * Experience entries from the CV (CV Mathias Bruflot.pdf, 2026).
 * Most recent first. Each translatable field is `{ en, no }`.
 */
export const experience: ExperienceItem[] = [
  {
    period: '2026 — 2027',
    title: { en: 'Board member', no: 'Styremedlem' },
    company: {
      en: 'echo (UiB informatics line association)',
      no: 'echo (linjeforeningen for informatikk, UiB)',
    },
    description: {
      en: 'Elected to the main board of echo, the line association for informatics students at the University of Bergen.',
      no: 'Valgt inn i hovedstyret for echo, linjeforeningen for informatikkstudentene ved Universitetet i Bergen.',
    },
  },
  {
    period: { en: 'Aug 2025 — Dec 2025', no: 'aug. 2025 — des. 2025' },
    title: { en: 'Group leader', no: 'Gruppeleder' },
    company: { en: 'University of Bergen', no: 'Universitetet i Bergen' },
    description: {
      en: 'Group leader for an introductory data-security course at UiB.',
      no: 'Gruppeleder for innføringsemnet i datasikkerhet ved UiB.',
    },
    bullets: [
      {
        en: 'Ran weekly group sessions for first-year informatics students.',
        no: 'Ledet ukentlige gruppetimer for førsteårsstudenter i informatikk.',
      },
      {
        en: 'Graded mandatory assignments and exam-prep tasks.',
        no: 'Rettet obligatoriske oppgaver og eksamensforberedende arbeid.',
      },
    ],
  },
  {
    period: {
      en: 'Apr 2022 — Aug 2024 · Sum 2025–2026',
      no: 'apr. 2022 — aug. 2024 · sommer 2025–2026',
    },
    title: { en: 'Service worker', no: 'Servicemedarbeider' },
    company: 'SSP',
    location: {
      en: 'Oslo Airport (Gardermoen)',
      no: 'Oslo lufthavn (Gardermoen)',
    },
    description: {
      en: "Several stints at the Everyday Kitchen and Bjørn's Backyard outlets — keeping standards up under airport-peak pressure.",
      no: "Flere perioder ved avdelingene Everyday Kitchen og Bjørn's Backyard — holdt standardene oppe i travle perioder på flyplassen.",
    },
  },
  {
    period: { en: 'Jan 2023 — Jan 2024', no: 'jan. 2023 — jan. 2024' },
    title: { en: 'Guard commander', no: 'Vaktkommandør' },
    company: { en: 'Norwegian Army (Hæren)', no: 'Hæren' },
    location: {
      en: 'Setermoen military camp',
      no: 'Setermoen militærleir',
    },
    description: {
      en: "Compulsory military service as guard commander at Norway's largest military camp.",
      no: 'Førstegangstjeneste som vaktkommandør ved Norges største militærleir.',
    },
    bullets: [
      {
        en: 'Coordinated guard-duty rotations.',
        no: 'Koordinerte vaktrullering.',
      },
      {
        en: 'Kept oversight when several tasks ran in parallel under pressure.',
        no: 'Holdt oversikt når flere oppgaver gikk parallelt under press.',
      },
    ],
  },
];
