import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education } from '@/data/education';
import { drift, stagger } from '@/lib/motion';
import { cn } from '@/lib/cn';

export function Education() {
  return (
    <section
      id="education"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-wide mx-auto scroll-mt-20"
    >
      <SectionHeading index="03" label="Studies" title="Education." />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="border-t border-ink/15"
      >
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            variants={drift}
            className={cn(
              'grid grid-cols-12 gap-y-4 gap-x-6 md:gap-x-8 items-start py-10 md:py-16',
              i !== education.length - 1 && 'border-b border-ink/15',
            )}
          >
            <div className="col-span-12 md:col-span-3 font-mono text-micro text-ink/50 md:pt-3">
              {edu.period ?? '— ONGOING —'}
            </div>

            <div className="col-span-12 md:col-span-9">
              <h3 className="font-serif text-display-2 text-ink max-w-[20ch]">
                {edu.degree}
              </h3>
              <p className="font-mono text-micro text-vermillion mt-5 uppercase">
                ↳ {edu.school}
              </p>
              <p className="text-ink/70 mt-5 max-w-measure leading-relaxed">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
