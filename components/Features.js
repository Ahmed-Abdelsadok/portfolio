"use client";

import Reveal from "./Reveal";
import { useContent } from "@/lib/i18n";

export default function Features() {
  const { features, howIWork, howIWorkLabel } = useContent();

  return (
    <div className="mt-5 space-y-5">
      <div className="grid gap-5 sm:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08}>
            <div className="panel panel-hover h-full p-7">
              <div className="mb-5 h-1 w-9 rounded-full bg-gradient-to-r from-gold-200 to-gold-500" />
              <h3 className="text-2xl font-bold leading-[1.05]">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {f.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {howIWork.map((h, i) => (
          <Reveal key={h.no} delay={i * 0.08}>
            <div className="panel h-full p-7">
              <div className="font-mono text-sm text-gold-300/70">{h.no}</div>
              <div className="label mt-2">{howIWorkLabel}</div>
              <h4 className="mt-4 text-xl font-semibold leading-snug">
                {h.title}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">{h.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
