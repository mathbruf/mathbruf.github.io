import { motion } from 'framer-motion';
import type { ExperienceItem } from '@/types';
import { drift } from '@/lib/motion';
import { cn } from '@/lib/cn';
import { useT } from '@/lib/i18n';

interface Props {
  item: ExperienceItem;
  isLast: boolean;
}

export function TimelineItem({ item, isLast }: Props) {
  const t = useT();
  return (
    <motion.div
      variants={drift}
      className={cn(
        'grid grid-cols-12 gap-y-3 gap-x-6 md:gap-x-8 items-baseline py-8 md:py-12',
        !isLast && 'border-b border-ink/15',
      )}
    >
      <div className="col-span-12 md:col-span-3 font-mono text-mono-sm text-ink/50 uppercase">
        {t(item.period)}
      </div>

      <div className="col-span-12 md:col-span-5">
        <h3 className="font-serif text-display-3 text-ink">{t(item.title)}</h3>
        <p className="font-mono text-mono-sm text-vermillion mt-2 uppercase">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              {t(item.company)} ↗
            </a>
          ) : (
            t(item.company)
          )}
          {item.location && (
            <span className="text-ink/50 normal-case">
              {' '}
              · {t(item.location)}
            </span>
          )}
        </p>
      </div>

      <div className="col-span-12 md:col-span-4">
        <p className="text-ink-soft leading-snug max-w-measure">
          {t(item.description)}
        </p>
        {item.bullets && item.bullets.length > 0 && (
          <ul className="mt-3 space-y-1.5 max-w-measure">
            {item.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-ink-soft leading-snug"
              >
                <span className="text-vermillion shrink-0" aria-hidden>
                  —
                </span>
                <span>{t(bullet)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
