import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';
import { stagger } from '@/lib/motion';

export function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-wide mx-auto scroll-mt-20"
    >
      <SectionHeading
        index="01"
        label="Selected Work"
        title="Things I've made."
      />

      {projects.length === 0 ? (
        <div className="border-y border-ink/15 py-16 md:py-24 text-center">
          <p className="font-mono text-micro text-ink/50 mb-3">
            STATUS — DRAFTING
          </p>
          <p className="font-serif italic text-display-3 text-ink-soft">
            Selected projects coming soon.
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
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              isLast={i === projects.length - 1}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
}
