import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-border scroll-mt-20"
    >
      <SectionHeading index="01" label="Selected work" title="Projects" />

      {projects.length === 0 ? (
        <div className="border border-dashed border-border/60 rounded-sm p-12 text-center">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted mb-2">
            Status: drafting
          </p>
          <p className="font-display text-xl text-fg/80">
            Projects coming soon — check back later.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
