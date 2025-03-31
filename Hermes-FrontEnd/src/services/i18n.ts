import { create } from 'zustand';

type Language = 'es' | 'en' | 'fr';

interface Translations {
  tryNow: string;
  about: string;
  features: string;
  contact: string;
  description: string;
  addLocation: string;
  editLocation: string;
  deleteLocation: string;
  name: string;
  address: string;
  actions: string;
  cancel: string;
  save: string;
}

const translations: Record<Language, Translations> = {
  es: {
    tryNow: 'Pruébalo ahora',
    about: 'Acerca de',
    features: 'Características',
    contact: 'Contacto',
    addLocation: 'Añadir ubicación',
    editLocation: 'Editar ubicación',
    deleteLocation: 'Eliminar ubicación',
    name: 'Nombre',
    address: 'Dirección',
    description: 'Descripción',
    actions: 'Acciones',
    cancel: 'Cancelar',
    save: 'Guardar'
  },
  en: {
    tryNow: 'Try it now',
    about: 'About',
    features: 'Features',
    contact: 'Contact',
    addLocation: 'Add location',
    editLocation: 'Edit location',
    deleteLocation: 'Delete location',
    name: 'Name',
    address: 'Address',
    description: 'Description',
    actions: 'Actions',
    cancel: 'Cancel',
    save: 'Save'
  },
  fr: {
    tryNow: 'Essayez maintenant',
    about: 'À propos',
    features: 'Fonctionnalités',
    contact: 'Contact',
    addLocation: 'Ajouter un emplacement',
    editLocation: 'Modifier l\'emplacement',
    deleteLocation: 'Supprimer l\'emplacement',
    name: 'Nom',
    address: 'Adresse',
    description: 'Description',
    actions: 'Actions',
    cancel: 'Annuler',
    save: 'Enregistrer'
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