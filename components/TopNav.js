"use client";

import { useContent } from "@/lib/i18n";
import { useScrollSpy } from "./useScrollSpy";
import LanguageSwitcher from "./LanguageSwitcher";

export default function TopNav() {
  const { profile, nav } = useContent();
  const active = useScrollSpy(nav.map((n) => n.id));

  return (
    <header className="sticky top-3 z-40 px-3 sm:px-5">
      <div className="panel mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-5">
        <a href="#home" className="min-w-0">
          <div className="truncate text-base font-semibold leading-tight sm:text-lg">
            {profile.name}
          </div>
          <div className="label mt-1 hidden !text-[10px] !tracking-[0.22em] sm:block">
            {profile.tagline}
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] p-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                active === n.id
                  ? "bg-gold-400/15 text-gold-200"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          {profile.available && (
            <span className="pill !hidden !gap-1.5 !border-emerald-400/20 !bg-emerald-400/5 !px-3 !py-1.5 !text-xs text-emerald-300 sm:!inline-flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availableLabel}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
