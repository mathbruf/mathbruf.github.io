import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

interface Props {
  text: string;
  speed?: number;
  className?: string;
  glyph?: string;
}

export function Marquee({
  text,
  speed = 60,
  className,
  glyph = '✦',
}: Props) {
  const reduce = useReducedMotion();
  const items = Array.from({ length: 6 });

  return (
    <div
      aria-hidden
      className={cn(
        'overflow-hidden whitespace-nowrap select-none border-y border-ink/15 py-5 md:py-6',
        className,
      )}
    >
      <div
        className="inline-flex"
        style={{
          animation: reduce ? 'none' : `marquee ${speed}s linear infinite`,
        }}
      >
        {[0, 1].map((group) => (
          <div key={group} className="inline-flex shrink-0">
            {items.map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-6 px-8 font-serif italic text-3xl md:text-5xl text-ink"
              >
                {text}
                <span className="text-vermillion not-italic">{glyph}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
