import type { Variants } from 'framer-motion';

export const easings = {
  out: [0.16, 1, 0.3, 1] as const,
  brut: [0.65, 0, 0.35, 1] as const,
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const drift: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easings.out },
  },
};

export const slideMask: Variants = {
  hidden: { y: '110%' },
  show: {
    y: '0%',
    transition: { duration: 0.9, ease: easings.out },
  },
};

export const drawLine: Variants = {
  hidden: { scaleX: 0, transformOrigin: 'left center' },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: easings.brut },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easings.out } },
};
