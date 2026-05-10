import { motion } from 'framer-motion';
import { drift, drawLine, stagger } from '@/lib/motion';
import { useT, type Loc } from '@/lib/i18n';

interface Props {
  index: string;
  label: Loc;
  title: Loc;
  caption?: Loc;
}

export function SectionHeading({ index, label, title, caption }: Props) {
  const t = useT();
  return (
    <motion.header
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="mb-16 md:mb-24 max-w-wide"
    >
      <motion.div
        variants={drift}
        className="flex items-baseline gap-4 font-mono text-micro mb-8"
      >
        <span className="text-vermillion">{index}</span>
        <motion.span
          variants={drawLine}
          aria-hidden
          className="h-px w-12 bg-ink origin-left"
        />
        <span className="text-ink uppercase">{t(label)}</span>
      </motion.div>

      <motion.h2 variants={drift} className="font-serif text-display-2 text-ink">
        {t(title)}
      </motion.h2>

      {caption && (
        <motion.p
          variants={drift}
          className="font-serif italic text-display-3 text-ink-soft mt-4 max-w-measure"
        >
          {t(caption)}
        </motion.p>
      )}
    </motion.header>
  );
}
