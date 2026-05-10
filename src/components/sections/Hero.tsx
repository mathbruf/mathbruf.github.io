import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AvailabilityBadge } from '@/components/ui/AvailabilityBadge';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-12">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[44rem] w-[44rem] -z-10 rounded-full opacity-50 blur-[120px] animate-gradient-mesh"
        style={{
          background:
            'radial-gradient(closest-side, rgb(var(--color-accent) / 0.30), rgb(var(--color-accent-dim) / 0.10) 60%, transparent 80%)',
          backgroundSize: '200% 200%',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl w-full mx-auto px-6 md:px-12"
      >
        <motion.div
          variants={item}
          className="flex items-center gap-4 mb-10"
        >
          <span
            aria-hidden
            className="h-px w-10 bg-accent"
          />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-accent">
            Portfolio &nbsp;/&nbsp; 2026
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-sans font-extrabold text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tightest text-fg mb-8"
        >
          Mathias
          <br />
          Bruflot
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start mb-12 max-w-3xl"
        >
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted whitespace-nowrap pt-1">
            ↳ Bergen, NO
          </div>
          <p className="text-lg md:text-xl text-fg/85 leading-relaxed font-light max-w-xl">
            Computer science student at the University of Bergen, building
            software that solves real problems —{' '}
            <span className="font-display-italic text-fg">
              quietly, and well.
            </span>
          </p>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-12">
          <Button href="#projects" variant="primary">
            View Projects
            <ArrowUpRight
              size={16}
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Button>
          <Button href="#contact" variant="secondary">
            Get in touch
          </Button>
        </motion.div>

        <motion.div variants={item}>
          <AvailabilityBadge />
        </motion.div>
      </motion.div>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase text-muted/60"
      >
        Scroll ↓
      </div>
    </section>
  );
}
