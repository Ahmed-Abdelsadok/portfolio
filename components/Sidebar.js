"use client";

import { useContent } from "@/lib/i18n";
import { iconFor } from "./icons";
import { useScrollSpy } from "./useScrollSpy";

export default function Sidebar() {
  const { profile, nav } = useContent();
  const active = useScrollSpy(nav.map((n) => n.id));

  return (
    <aside className="fixed start-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col items-center gap-1.5 rounded-[30px] border border-white/[0.07] bg-white/[0.025] p-2.5 shadow-card backdrop-blur-xl">
        <a
          href="#home"
          className="mb-1 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.03]"
          title={profile.name}
        >
          <span className="font-mono text-lg font-bold gradient-text">
            {profile.initials}
          </span>
        </a>
        <div className="my-1 h-px w-6 bg-white/10" />

        {nav.map((n) => {
          const Icon = iconFor[n.id];
          const isActive = active === n.id;
          return (
            <a
              key={n.id}
              href={`#${n.id}`}
              title={n.label}
              className={`group relative grid h-11 w-11 place-items-center rounded-full transition-colors duration-300 ${
                isActive
                  ? "bg-gold-400/15 text-gold-200"
                  : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
              }`}
            >
              <Icon />
              <span className="pointer-events-none absolute start-full ms-3 whitespace-nowrap rounded-md border border-white/10 bg-base/90 px-2.5 py-1 text-xs text-zinc-200 opacity-0 transition-opacity group-hover:opacity-100">
                {n.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
