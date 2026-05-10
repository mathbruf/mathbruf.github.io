import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { RevealText } from '@/components/motion/RevealText';
import { drift, fade, stagger } from '@/lib/motion';
import { useLang, useT } from '@/lib/i18n';

export function Hero() {
  const { lang } = useLang();
  const t = useT();
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
          className="grid grid-cols-12 gap-y-8 gap-x-6 md:gap-x-8 mb-12 md:mb-16 items-end"
        >
          <div className="col-span-12 md:col-span-3 flex items-end gap-5">
            <div
              className="w-20 h-20 md:w-24 md:h-24 shrink-0 border border-ink/20 overflow-hidden"
              aria-hidden
            >
              <img
                src="/portrait.jpg"
                alt={t({
                  en: 'Portrait of Mathias Bruflot',
                  no: 'Portrett av Mathias Bruflot',
                })}
                width={272}
                height={272}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-mono text-micro text-ink/60 space-y-1.5">
              <div>
                {t({
                  en: `↳ Portfolio / ${year}`,
                  no: `↳ Portefølje / ${year}`,
                })}
              </div>
              <div>
                {t({ en: '↳ Bergen, Norway', no: '↳ Bergen, Norge' })}
              </div>
              <div>↳ N 60.39° / E 5.32°</div>
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
          <p className="col-span-12 md:col-span-6 md:col-start-4 font-serif text-display-3 text-ink-soft leading-snug max-w-measure">
            {lang === 'en'
              ? 'Computer science at UiB. Mostly Python and Java, with a bit of Haskell on the side.'
              : 'Datateknologi ved UiB. Koder mest i Python og Java, med litt Haskell på si.'}
          </p>

          <div className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col items-start md:items-end gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 font-mono text-micro text-ink hover:text-vermillion transition-colors"
            >
              {t({ en: 'Selected work', no: 'Prosjekter' }).toUpperCase()}
              <ArrowDown
                size={12}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-mono text-micro text-ink hover:text-vermillion transition-colors"
            >
              {t({ en: 'Get in touch', no: 'Ta kontakt' }).toUpperCase()}
              <ArrowUpRight
                size={12}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
