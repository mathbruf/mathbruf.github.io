import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/cn';

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="font-mono text-micro flex items-center gap-1.5"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={cn(
          'transition-colors',
          lang === 'en' ? 'text-vermillion' : 'text-ink/40 hover:text-ink',
        )}
      >
        EN
      </button>
      <span className="text-ink/30" aria-hidden>
        /
      </span>
      <button
        type="button"
        onClick={() => setLang('no')}
        aria-pressed={lang === 'no'}
        className={cn(
          'transition-colors',
          lang === 'no' ? 'text-vermillion' : 'text-ink/40 hover:text-ink',
        )}
      >
        NO
      </button>
    </div>
  );
}
