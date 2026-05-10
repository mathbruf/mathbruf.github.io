import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { easings } from '@/lib/motion';

interface Props {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function RevealText({
  children,
  className,
  delay = 0,
  stagger = 0.05,
  once = true,
}: Props) {
  const words = children.split(' ');
  return (
    <span className={cn('inline-block', className)} aria-label={children}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-bottom mr-[0.22em] last:mr-0"
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once, margin: '-50px' }}
            transition={{
              duration: 0.95,
              delay: delay + i * stagger,
              ease: easings.out,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
