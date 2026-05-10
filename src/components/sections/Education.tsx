import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education } from '@/data/education';
import { drift, easings, stagger } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';
import { useLang, useT } from '@/lib/i18n';

export function Education() {
  return (
    <section
      id="education"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-wide mx-auto scroll-mt-20"
    >
      <SectionHeading
        index="03"
        label={{ en: 'Studies', no: 'Studier' }}
        title={{ en: 'Education.', no: 'Utdanning.' }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="border-t border-ink/15"
      >
        {education.map((edu, i) => {
          const key =
            typeof edu.degree === 'string' ? edu.degree : edu.degree.en;
          return (
            <EducationRow
              key={key}
              edu={edu}
              isLast={i === education.length - 1}
            />
          );
        })}
      </motion.div>
    </section>
  );
}

interface RowProps {
  edu: (typeof education)[number];
  isLast: boolean;
}

function EducationRow({ edu, isLast }: RowProps) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const t = useT();
  const { lang } = useLang();

  return (
    <motion.div
      variants={drift}
      className={cn(
        'grid grid-cols-12 gap-y-4 gap-x-6 md:gap-x-8 items-start py-10 md:py-14',
        !isLast && 'border-b border-ink/15',
      )}
    >
      <div className="col-span-12 md:col-span-3 font-mono text-micro text-ink/50 md:pt-3">
        {edu.period
          ? t(edu.period)
          : lang === 'en'
            ? '— ONGOING —'
            : '— PÅGÅR —'}
      </div>

      <div className="col-span-12 md:col-span-9">
        <h3 className="font-serif text-display-2 text-ink max-w-[20ch]">
          {t(edu.degree)}
        </h3>
        <p className="font-mono text-micro text-vermillion mt-5 uppercase">
          ↳ {t(edu.school)}
        </p>
        <p className="text-ink-soft mt-5 max-w-measure leading-relaxed">
          {t(edu.description)}
        </p>

        {edu.details && (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="group inline-flex items-center gap-2 mt-6 font-mono text-micro text-ink hover:text-vermillion transition-colors"
            >
              {open
                ? lang === 'en'
                  ? 'Read less'
                  : 'Skjul'
                : lang === 'en'
                  ? 'Read more'
                  : 'Les mer'}
              <ChevronDown
                size={12}
                aria-hidden
                className={cn(
                  'transition-transform duration-300',
                  open && 'rotate-180',
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { duration: 0.4, ease: easings.out }
                  }
                  className="overflow-hidden"
                >
                  <p className="text-ink-soft mt-5 max-w-measure leading-relaxed border-l border-ink/15 pl-4">
                    {t(edu.details)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  );
}
