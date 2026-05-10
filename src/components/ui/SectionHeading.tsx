import { motion } from 'framer-motion';

interface Props {
  index?: string;
  label: string;
  title: string;
}

export function SectionHeading({ index, label, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-4 font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
        {index && (
          <>
            <span className="text-accent">{index}</span>
            <span aria-hidden className="h-px w-8 bg-border" />
          </>
        )}
        <span>{label}</span>
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tightest text-fg">
        {title}
      </h2>
    </motion.div>
  );
}
