"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang, languages } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="pill !gap-1.5 !px-3 !py-1.5 !text-xs hover:!border-white/25"
      >
        <span className="text-sm leading-none">🌐</span>
        <span className="hidden sm:inline">{current.native}</span>
        <span className="font-mono text-[10px] text-zinc-500 sm:hidden">
          {current.short}
        </span>
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 z-50 mt-2 min-w-[160px] overflow-hidden rounded-2xl border border-white/10 bg-ink/95 p-1.5 shadow-card backdrop-blur-xl"
        >
          {languages.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2 text-sm transition-colors ${
                  l.code === lang
                    ? "bg-gold-400/15 text-gold-200"
                    : "text-zinc-300 hover:bg-white/5"
                }`}
              >
                <span>{l.native}</span>
                <span className="font-mono text-[10px] text-zinc-500">
                  {l.short}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
