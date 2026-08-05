"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  themePreferences,
  translations,
  type AppliedTheme,
  type Language,
  type ThemePreference,
  type Translation
} from "@/content/translations";

type PreferencesContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  theme: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
  cycleTheme: () => void;
  appliedTheme: AppliedTheme;
  t: Translation;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

const LANGUAGE_STORAGE_KEY = "bonnie-language";
const THEME_STORAGE_KEY = "bonnie-theme";

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "zh";
}

function isThemePreference(value: string | null): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark";
}

function resolveTheme(theme: ThemePreference): AppliedTheme {
  if (theme !== "system") {
    return theme;
  }

  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyDocumentPreferences(language: Language, appliedTheme: AppliedTheme) {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.theme = appliedTheme;
  document.documentElement.style.colorScheme = appliedTheme;
}

export function PreferencesProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("en");
  const [theme, setThemeState] = useState<ThemePreference>("system");
  const [appliedTheme, setAppliedTheme] = useState<AppliedTheme>("light");

  useEffect(() => {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const nextLanguage = isLanguage(storedLanguage) ? storedLanguage : "en";
    const nextTheme = isThemePreference(storedTheme) ? storedTheme : "system";
    const nextAppliedTheme = resolveTheme(nextTheme);

    setLanguageState(nextLanguage);
    setThemeState(nextTheme);
    setAppliedTheme(nextAppliedTheme);
    applyDocumentPreferences(nextLanguage, nextAppliedTheme);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncSystemTheme = () => {
      setAppliedTheme(resolveTheme(theme));
    };

    syncSystemTheme();
    mediaQuery.addEventListener("change", syncSystemTheme);

    return () => mediaQuery.removeEventListener("change", syncSystemTheme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    applyDocumentPreferences(language, appliedTheme);
  }, [language, appliedTheme]);

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => (current === "en" ? "zh" : "en"));
  }, []);

  const setTheme = useCallback((nextTheme: ThemePreference) => {
    setThemeState(nextTheme);
    setAppliedTheme(resolveTheme(nextTheme));
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeState((current) => {
      const currentIndex = themePreferences.indexOf(current);
      const nextTheme =
        themePreferences[(currentIndex + 1) % themePreferences.length];
      setAppliedTheme(resolveTheme(nextTheme));
      return nextTheme;
    });
  }, []);

  const value = useMemo<PreferencesContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      theme,
      setTheme,
      cycleTheme,
      appliedTheme,
      t: translations[language]
    }),
    [
      appliedTheme,
      cycleTheme,
      language,
      setLanguage,
      setTheme,
      theme,
      toggleLanguage
    ]
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }

  return context;
}
