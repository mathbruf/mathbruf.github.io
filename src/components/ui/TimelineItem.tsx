import { motion } from 'framer-motion';
import type { ExperienceItem } from '@/types';
import { drift } from '@/lib/motion';
import { cn } from '@/lib/cn';

interface Props {
  item: ExperienceItem;
  isLast: boolean;
}

export function TimelineItem({ item, isLast }: Props) {
  return (
    <motion.div
      variants={drift}
      className={cn(
        'grid grid-cols-12 gap-y-3 gap-x-6 md:gap-x-8 items-baseline py-8 md:py-12',
        !isLast && 'border-b border-ink/15',
      )}
    >
      <div className="col-span-12 md:col-span-3 font-mono text-mono-sm text-ink/50 uppercase">
        {item.period}
      </div>

      <div className="col-span-12 md:col-span-5">
        <h3 className="font-serif text-display-3 text-ink leading-[1.05]">
          {item.title}
        </h3>
        <p className="font-mono text-mono-sm text-vermillion mt-2 uppercase">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              {item.company} ↗
            </a>
          ) : (
            item.company
          )}
        </p>
      </div>

      <div className="col-span-12 md:col-span-4">
        <p className="text-ink/70 leading-snug max-w-measure">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
