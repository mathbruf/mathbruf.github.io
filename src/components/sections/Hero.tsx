import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { RevealText } from '@/components/motion/RevealText';
import { drift, fade, stagger } from '@/lib/motion';

export function Hero() {
  const year = new Date().getFullYear();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12 md:pb-16 pt-32"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="w-full max-w-wide mx-auto"
      >
        <motion.div
          variants={fade}
          className="grid grid-cols-12 gap-y-6 gap-x-6 md:gap-x-8 mb-12 md:mb-16"
        >
          <div className="col-span-12 md:col-span-3 font-mono text-micro text-ink/60 space-y-1.5">
            <div>↳ PORTFOLIO / {year}</div>
            <div>↳ BERGEN, NORWAY</div>
            <div>↳ N 60.39° / E 5.32°</div>
          </div>

          <div className="hidden md:block md:col-span-9">
            <div className="flex items-center gap-3 font-mono text-micro text-ink">
              <span className="relative flex h-1.5 w-1.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full bg-vermillion opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 bg-vermillion" />
              </span>
              AVAILABLE FOR INTERNSHIPS — 2026
            </div>
          </div>
        </motion.div>

        <h1 className="font-serif font-normal text-display-1 text-ink">
          <RevealText delay={0.1}>Mathias</RevealText>
          <br />
          <span className="inline-flex items-end">
            <RevealText delay={0.25}>Bruflot</RevealText>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="text-vermillion"
            >
              .
            </motion.span>
          </span>
        </h1>

        <motion.div
          variants={drift}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.1 }}
          className="grid grid-cols-12 gap-y-8 gap-x-6 md:gap-x-8 mt-12 md:mt-16 items-end"
        >
          <p className="col-span-12 md:col-span-6 md:col-start-4 font-serif italic text-display-3 text-ink-soft leading-snug max-w-measure">
            Computer science student building software that solves real
            problems —{' '}
            <span className="not-italic font-mono text-mono-sm uppercase tracking-wider align-middle text-ink">
              quietly, and well.
            </span>
          </p>

          <div className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col items-start md:items-end gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 font-mono text-micro text-ink hover:text-vermillion transition-colors"
            >
              SELECTED WORK
              <ArrowDown
                size={12}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-mono text-micro text-ink hover:text-vermillion transition-colors"
            >
              GET IN TOUCH
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div
        aria-hidden
        className="absolute top-0 left-3 lg:left-5 h-24 flex items-end font-mono text-[10px] tracking-[0.2em] text-ink/40 hidden md:flex"
        style={{ writingMode: 'vertical-rl' }}
      >
        ↑ INDEX
      </div>
    </section>
  );
}
