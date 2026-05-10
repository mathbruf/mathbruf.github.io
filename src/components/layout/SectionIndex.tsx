import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';
import { useT, type Loc } from '@/lib/i18n';

const sections: { id: string; index: string; label: Loc }[] = [
  { id: 'hero', index: '00', label: { en: 'Index', no: 'Indeks' } },
  { id: 'about', index: '01', label: { en: 'About', no: 'Om' } },
  { id: 'experience', index: '02', label: { en: 'Work', no: 'Arbeid' } },
  { id: 'education', index: '03', label: { en: 'Studies', no: 'Studier' } },
  { id: 'projects', index: '04', label: { en: 'Code', no: 'Kode' } },
  { id: 'contact', index: '05', label: { en: 'Contact', no: 'Kontakt' } },
];

export function SectionIndex() {
  const [activeId, setActiveId] = useState<string>('hero');
  const t = useT();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { threshold: [0.15, 0.4, 0.7] },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="fixed top-0 bottom-0 left-3 lg:left-5 z-30 hidden md:flex flex-col justify-center pointer-events-none"
      aria-label={t({ en: 'Section index', no: 'Seksjonsindeks' })}
    >
      <ul className="flex flex-col gap-5 pointer-events-auto">
        {sections.map((s) => {
          const active = s.id === activeId;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center gap-3"
                aria-label={`${t(s.label)}`}
              >
                <span
                  className={cn(
                    'font-mono text-[10px] tracking-[0.2em] transition-colors duration-500',
                    active
                      ? 'text-vermillion'
                      : 'text-ink/30 group-hover:text-ink',
                  )}
                >
                  {s.index}
                </span>
                <span
                  className={cn(
                    'h-px transition-all duration-700 ease-out',
                    active
                      ? 'w-10 bg-vermillion'
                      : 'w-3 bg-ink/30 group-hover:w-6 group-hover:bg-ink',
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
