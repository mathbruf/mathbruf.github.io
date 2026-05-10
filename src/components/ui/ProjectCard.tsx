import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/types';
import { Tag } from './Tag';

interface Props {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative bg-surface/40 border border-border rounded-sm p-6 transition-colors hover:border-fg/40"
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
      />

      <div className="flex items-baseline justify-between mb-5">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-accent">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex gap-3 text-muted">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="hover:text-fg transition-colors"
            >
              <Github size={15} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="hover:text-fg transition-colors"
            >
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>

      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt=""
          loading="lazy"
          className="w-full h-40 object-cover rounded-sm mb-5 grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      )}

      <h3 className="font-display text-2xl font-medium tracking-tight mb-3 leading-tight">
        {project.title}
      </h3>
      <p className="text-sm text-muted mb-6 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {project.tags.map((tag, i) => (
          <span key={tag} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden className="text-muted/40">
                ·
              </span>
            )}
            <Tag>{tag}</Tag>
          </span>
        ))}
      </div>
    </motion.article>
  );
}
