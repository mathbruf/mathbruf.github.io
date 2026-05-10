import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { experience } from '@/data/experience';
import { stagger } from '@/lib/motion';

export function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-wide mx-auto scroll-mt-20"
    >
      <SectionHeading
        index="02"
        label="Background"
        title="Experience."
      />

      {experience.length === 0 ? (
        <div className="border-y border-ink/15 py-16 md:py-24 text-center">
          <p className="font-mono text-micro text-ink/50 mb-3">
            STATUS — IN PROGRESS
          </p>
          <p className="font-serif italic text-display-3 text-ink-soft">
            Work history coming soon.
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
          {experience.map((item, i) => (
            <TimelineItem
              key={`${item.title}-${item.period}`}
              item={item}
              isLast={i === experience.length - 1}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
}
