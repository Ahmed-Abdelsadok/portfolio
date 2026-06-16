"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import PortraitOrb from "./PortraitOrb";
import { useContent } from "@/lib/i18n";

export default function About() {
  const { about, profile } = useContent();

  return (
    <>
      <SectionHeader index="03" label={about.label} title={about.heading} />
      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <Reveal className="panel p-7 sm:p-9">
          <div className="space-y-5 text-lg leading-relaxed text-zinc-300">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-9 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="gradient-text text-3xl font-extrabold sm:text-4xl">
                  {s.value}
                </div>
                <div className="label mt-1.5 !tracking-[0.1em]">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="panel flex flex-col items-center justify-center p-8">
          <PortraitOrb className="w-[70%]" />
          <div className="mt-7 text-center">
            <div className="text-xl font-bold">{profile.name}</div>
            <div className="label mt-2">{profile.roles.join(" · ")}</div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
