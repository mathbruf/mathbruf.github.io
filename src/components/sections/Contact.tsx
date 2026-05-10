import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Toast } from '@/components/ui/Toast';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { EMAIL, socials } from '@/data/socials';

export function Contact() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-border scroll-mt-20"
    >
      <SectionHeading index="04" label="Reach out" title="Get in touch" />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
        <div className="max-w-xl">
          <p className="font-display text-2xl md:text-3xl font-medium tracking-tight leading-snug text-fg/90 mb-8">
            Open to internships, collaborations, and any conversation about
            building software well.
          </p>

          <button
            type="button"
            onClick={() => copy(EMAIL)}
            className="group flex items-center gap-3 font-mono text-sm text-fg hover:text-accent transition-colors"
          >
            <span className="border-b border-dotted border-current pb-0.5">
              {EMAIL}
            </span>
            <span aria-hidden className="text-muted group-hover:text-accent">
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </span>
          </button>
        </div>

        <ul className="flex flex-col gap-4 md:min-w-[180px]">
          {socials.map((s, i) => {
            const Icon = s.icon;
            const isExternal = s.href.startsWith('http');
            return (
              <motion.li
                key={s.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <a
                  href={s.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 py-3 border-t border-border hover:border-fg/50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={16} className="text-muted group-hover:text-fg transition-colors" aria-hidden />
                    <span className="text-sm font-medium">{s.label}</span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    aria-hidden
                    className="text-muted group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <Toast show={copied} message="Email copied to clipboard" />
    </section>
  );
}
