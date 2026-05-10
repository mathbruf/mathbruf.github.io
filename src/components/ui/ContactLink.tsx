import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Copy,
  type LucideIcon,
} from 'lucide-react';
import { drift } from '@/lib/motion';
import { cn } from '@/lib/cn';

interface Props {
  label: string;
  secondary: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  copied?: boolean;
}

export function ContactLink({
  label,
  secondary,
  icon: Icon,
  href,
  onClick,
  copied,
}: Props) {
  const isExternal = !!href && href.startsWith('http');
  const TrailingIcon = onClick ? (copied ? Check : Copy) : ArrowUpRight;

  const inner = (
    <>
      <div className="flex items-center justify-between mb-12">
        <Icon
          size={15}
          aria-hidden
          className="text-ink/60 transition-colors group-hover:text-ink"
        />
        <TrailingIcon
          size={14}
          aria-hidden
          className="text-ink/40 transition-colors group-hover:text-vermillion"
        />
      </div>
      <p className="font-mono text-micro text-ink uppercase mb-1.5">{label}</p>
      <p
        className="font-mono text-mono-sm text-ink/60 truncate"
        title={secondary}
      >
        {secondary}
      </p>
    </>
  );

  const classes = cn(
    'group block w-full h-full text-left p-6',
    'border border-ink/15 transition-colors hover:border-ink',
  );

  return (
    <motion.div variants={drift} className="h-full">
      {onClick ? (
        <button type="button" onClick={onClick} className={classes}>
          {inner}
        </button>
      ) : (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={classes}
        >
          {inner}
        </a>
      )}
    </motion.div>
  );
}
