import { create } from 'zustand';
import es from '../locales/es';
import en from '../locales/en';
import fr from '../locales/fr';

type Language = 'es' | 'en' | 'fr';

interface Translations {
  tryNow: string;
  about: string;
  features: string;
  contact: string;
  language: {
    spanish: string;
    english: string;
    french: string;
  };
}

const translations: Record<Language, Translations> = { es, en, fr };

const defaultLanguage: Language = navigator.language.startsWith('es')
  ? 'es'
  : navigator.language.startsWith('fr')
  ? 'fr'
  : 'en';

export const useLanguage = create<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}>((set, get) => ({
  language: defaultLanguage,
  setLanguage: (lang) => set({ language: lang }),
  t: (key) => {
    const keys = key.split('.');
    let value: any = translations[get().language];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return `Missing translation: ${key}`;
    }

    return value;
  },
}));


