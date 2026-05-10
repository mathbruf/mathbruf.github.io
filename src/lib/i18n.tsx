/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type Lang = 'en' | 'no';

export interface Localized {
  en: string;
  no: string;
}

export type Loc = string | Localized;

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = 'mb-lang';

function detectInitial(): Lang {
  if (typeof window === 'undefined') return 'no';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'no') return stored;
  } catch {
    // ignore
  }
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'no';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitial);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((l) => (l === 'en' ? 'no' : 'en')),
    [],
  );

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}

export function translate(value: Loc, lang: Lang): string {
  if (typeof value === 'string') return value;
  return value[lang];
}

export function useT() {
  const { lang } = useLang();
  return useCallback((value: Loc) => translate(value, lang), [lang]);
}
