import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-soft': 'rgb(var(--ink-soft) / <alpha-value>)',
        rule: 'rgb(var(--ink) / <alpha-value>)',
        vermillion: 'rgb(var(--vermillion) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: [
          '"JetBrains Mono Variable"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      fontSize: {
        'display-1': [
          'clamp(3rem, 8vw, 7rem)',
          { lineHeight: '0.95', letterSpacing: '-0.04em' },
        ],
        'display-2': [
          'clamp(2rem, 4vw, 3.5rem)',
          { lineHeight: '1', letterSpacing: '-0.03em' },
        ],
        'display-3': [
          'clamp(1.375rem, 2.5vw, 1.875rem)',
          { lineHeight: '1.05', letterSpacing: '-0.02em' },
        ],
        micro: [
          '11px',
          { lineHeight: '1.2', letterSpacing: '0.18em' },
        ],
        'mono-sm': [
          '12px',
          { lineHeight: '1.4', letterSpacing: '0.04em' },
        ],
      },
      maxWidth: {
        measure: '60ch',
        wide: '88rem',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        brut: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
