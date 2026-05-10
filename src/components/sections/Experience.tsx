import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { experience } from '@/data/experience';
import { stagger } from '@/lib/motion';
import { useLang } from '@/lib/i18n';

export function Experience() {
  const { lang } = useLang();

  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-wide mx-auto scroll-mt-20"
    >
      <SectionHeading
        index="02"
        label={{ en: 'Background', no: 'Bakgrunn' }}
        title={{ en: 'Experience.', no: 'Erfaring.' }}
      />

      {experience.length === 0 ? (
        <div className="border-y border-ink/15 py-16 md:py-24 text-center">
          <p className="font-mono text-micro text-ink/50 mb-3">
            {lang === 'en' ? 'STATUS — IN PROGRESS' : 'STATUS — UNDER ARBEID'}
          </p>
          <p className="font-serif italic text-display-3 text-ink-soft">
            {lang === 'en'
              ? 'Work history coming soon.'
              : 'Arbeidshistorikken kommer snart.'}
          </p>
        </div>
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="border-t border-ink/15"
        >
          {experience.map((item, i) => {
            const key =
              typeof item.title === 'string' ? item.title : item.title.en;
            const periodKey =
              typeof item.period === 'string' ? item.period : item.period.en;
            return (
              <TimelineItem
                key={`${key}-${periodKey}`}
                item={item}
                isLast={i === experience.length - 1}
              />
            );
          })}
        </motion.div>
      )}
    </section>
  );
}
