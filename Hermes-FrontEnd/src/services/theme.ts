import { create } from 'zustand';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

const getDefaultTheme = (): Theme => {
  const storedTheme = localStorage.getItem('theme') as Theme | null;
  if (storedTheme) return storedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light;
};

export const useTheme = create<ThemeStore>((set) => {
  const initialTheme = getDefaultTheme();
  document.body.classList.add(initialTheme); // Aplica la clase inicial

  return {
    theme: initialTheme,
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === Theme.Light ? Theme.Dark : Theme.Light;

        document.body.classList.remove(state.theme);
        document.body.classList.add(newTheme);

        localStorage.setItem('theme', newTheme);
        return { theme: newTheme };
      }),
  };
});

