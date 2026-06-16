"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getContent, defaultLang, languages } from "./content";

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(defaultLang);

  // Restore saved language on first mount (after hydration).
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved && languages.some((l) => l.code === saved)) {
        setLangState(saved);
      }
    } catch {}
  }, []);

  // Reflect language on <html> (lang + dir) and persist it.
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((l) => setLangState(l), []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      dir: lang === "ar" ? "rtl" : "ltr",
      languages,
      content: getContent(lang),
    }),
    [lang, setLang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}

export function useContent() {
  return useLang().content;
}
