import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import type { SectionId } from '@/types';

const links: { id: SectionId; label: string; index: string }[] = [
  { id: 'projects', label: 'Projects', index: '01' },
  { id: 'experience', label: 'Experience', index: '02' },
  { id: 'education', label: 'Education', index: '03' },
  { id: 'contact', label: 'Contact', index: '04' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => links.map((l) => l.id), []);
  const active = useScrollSpy(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[120] transition-all backdrop-blur-md ${
        scrolled
          ? 'bg-bg/85 border-b border-border'
          : 'bg-bg/40 border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <a
          href="#"
          aria-label="Home"
          className="group flex items-baseline gap-2 font-sans text-base font-bold tracking-tight"
        >
          <span>Mathias Bruflot</span>
          <span className="text-accent transition-transform group-hover:translate-y-0.5">
            .
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className="group flex items-baseline gap-1.5 text-sm transition-colors"
                >
                  <span
                    className={`font-mono text-[10px] tracking-[0.1em] transition-colors ${
                      isActive ? 'text-accent' : 'text-muted/60'
                    }`}
                  >
                    {link.index}
                  </span>
                  <span
                    className={`transition-colors ${
                      isActive
                        ? 'text-fg'
                        : 'text-muted group-hover:text-fg'
                    }`}
                  >
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden p-2 text-muted hover:text-fg"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-border bg-bg/95"
          >
            <ul className="px-6 py-4 flex flex-col">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] tracking-[0.1em] text-accent">
                        {link.index}
                      </span>
                      <span
                        className={`text-sm ${
                          active === link.id ? 'text-fg' : 'text-muted'
                        }`}
                      >
                        {link.label}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
