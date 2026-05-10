import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education } from '@/data/education';

export function Education() {
  return (
    <section
      id="education"
      className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-border scroll-mt-20"
    >
      <SectionHeading index="03" label="Studies" title="Education" />

      <div className="flex flex-col gap-10">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12"
          >
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted md:pt-2">
              {edu.period ?? 'Ongoing'}
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-2 leading-tight">
                {edu.degree}
              </h3>
              <p className="text-sm text-accent mb-3 font-medium">
                {edu.school}
              </p>
              <p className="text-sm text-muted leading-relaxed max-w-prose">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
