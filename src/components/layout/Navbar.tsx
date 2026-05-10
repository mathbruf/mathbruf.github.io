import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        <a href="#projects" className="text-ink/60 hover:text-ink transition-colors">
          WORK
        </a>
        <a href="#contact" className="text-ink/60 hover:text-ink transition-colors">
          CONTACT
        </a>
      </div>

      <a
        href="#contact"
        className="md:hidden font-mono text-micro text-ink hover:text-vermillion transition-colors"
      >
        ↗ CONTACT
      </a>
    </nav>
  );
}
