import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import { useT, type Loc } from '@/lib/i18n';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

const navLinks: { id: string; label: Loc }[] = [
  { id: 'about', label: { en: 'About', no: 'Om' } },
  { id: 'projects', label: { en: 'Work', no: 'Arbeid' } },
  { id: 'contact', label: { en: 'Contact', no: 'Kontakt' } },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-5 flex items-center justify-between transition-colors',
        scrolled ? 'bg-paper/90 backdrop-blur-sm' : 'bg-transparent',
      )}
    >
      <a
        href="#hero"
        className="font-mono text-micro text-ink hover:text-vermillion transition-colors"
      >
        ↳ MATHIAS BRUFLOT
      </a>

      <div className="hidden md:flex items-center gap-8 font-mono text-micro">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-ink/60 hover:text-ink transition-colors uppercase"
          >
            {t(link.label)}
          </a>
        ))}
        <span aria-hidden className="text-ink/20">
          |
        </span>
        <LanguageToggle />
      </div>

      <div className="md:hidden flex items-center gap-4">
        <LanguageToggle />
        <a
          href="#contact"
          className="font-mono text-micro text-ink hover:text-vermillion transition-colors"
        >
          ↗ {t({ en: 'CONTACT', no: 'KONTAKT' })}
        </a>
      </div>
    </nav>
  );
}
