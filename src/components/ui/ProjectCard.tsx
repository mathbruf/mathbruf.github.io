import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';
import { drift } from '@/lib/motion';
import { cn } from '@/lib/cn';

interface Props {
  project: Project;
  index: number;
  isLast: boolean;
}

export function ProjectCard({ project, index, isLast }: Props) {
  const href = project.demo ?? project.github;
  const Tag = href ? 'a' : 'div';
  const linkProps = href
    ? { href, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <motion.div
      variants={drift}
      className={cn(!isLast && 'border-b border-ink/15')}
    >
      <Tag
        {...linkProps}
        className="group block py-8 md:py-12 transition-colors"
      >
        <div className="grid grid-cols-12 gap-y-3 gap-x-6 md:gap-x-8 items-baseline">
          <div className="col-span-2 md:col-span-1 font-mono text-mono-sm text-ink/40">
            {String(index + 1).padStart(2, '0')}
          </div>

          <div className="col-span-10 md:col-span-5">
            <h3 className="font-serif text-display-3 text-ink transition-colors duration-300 group-hover:text-vermillion">
              {project.title}
            </h3>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className="text-ink/70 leading-snug max-w-measure">
              {project.description}
            </p>
          </div>

          <div className="col-span-10 md:col-span-2 md:text-right">
            <div className="flex flex-wrap md:justify-end items-baseline gap-x-2 gap-y-1 font-mono text-mono-sm text-ink/50">
              {project.tags.map((tag, i) => (
                <span key={tag} className="inline-flex items-baseline gap-2">
                  {i > 0 && <span className="text-ink/30">·</span>}
                  <span className="lowercase">{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {href && (
            <div className="col-span-2 md:hidden flex justify-end items-baseline">
              <ArrowUpRight
                size={16}
                className="text-ink/40 group-hover:text-vermillion group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
              />
            </div>
          )}
        </div>
      </Tag>
    </motion.div>
  );
}
