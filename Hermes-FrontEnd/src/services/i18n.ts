import { create } from 'zustand';

type Language = 'es' | 'en' | 'fr';

interface Translations {
  tryNow: string;
  about: string;
  features: string;
  contact: string;
  description: string;
}

const translations: Record<Language, Translations> = {
  es: {
    tryNow: 'Pruébalo ahora',
    about: 'Acerca de',
    features: 'Características',
    contact: 'Contacto',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  en: {
    tryNow: 'Try it now',
    about: 'About',
    features: 'Features',
    contact: 'Contact',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  fr: {
    tryNow: 'Essayez maintenant',
    about: 'À propos',
    features: 'Fonctionnalités',
    contact: 'Contact',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
};

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

export const useLanguage = create<LanguageStore>((set, get) => ({
  language: 'es',
  setLanguage: (lang) => set({ language: lang }),
  t: (key) => translations[get().language][key],
}));