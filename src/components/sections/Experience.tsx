import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { experience } from '@/data/experience';

export function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-border scroll-mt-20"
    >
      <SectionHeading index="02" label="Background" title="Experience" />

      {experience.length === 0 ? (
        <div className="border border-dashed border-border/60 rounded-sm p-12 text-center">
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted mb-2">
            Status: in progress
          </p>
          <p className="font-display text-xl text-fg/80">
            Work history coming soon.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {experience.map((item, i) => (
            <TimelineItem
              key={`${item.title}-${item.period}`}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      )}
    </section>
  );
}
