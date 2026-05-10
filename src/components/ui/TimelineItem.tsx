import { motion } from 'framer-motion';
import type { ExperienceItem } from '@/types';

interface Props {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ item, index, isLast }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12 ${
        isLast ? '' : 'pb-10 border-b border-border/60'
      }`}
    >
      <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted md:pt-2">
        {item.period}
      </div>

      <div>
        <h3 className="font-display text-2xl font-medium tracking-tight mb-1 leading-tight">
          {item.title}
        </h3>
        <p className="text-sm text-accent mb-3 font-medium">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4"
            >
              {item.company}
            </a>
          ) : (
            item.company
          )}
        </p>
        <p className="text-sm text-muted leading-relaxed max-w-prose">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
