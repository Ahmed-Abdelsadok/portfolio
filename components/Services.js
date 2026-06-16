"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { useContent } from "@/lib/i18n";

export default function Services() {
  const { services } = useContent();

  return (
    <>
      <SectionHeader index="02" label={services.label} title={services.title} />
      <div className="grid gap-5 lg:grid-cols-3">
        {services.list.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="panel panel-hover h-full p-7">
              <div className="font-mono text-sm text-gold-300/70">0{i + 1}</div>
              <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {s.text}
              </p>
              <ul className="mt-6 space-y-2.5">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5">
        <div className="panel p-7">
          <div className="label mb-5">{services.toolsLabel}</div>
          <div className="flex flex-wrap gap-2.5">
            {services.stack.map((t) => (
              <span
                key={t}
                className="pill !py-1.5 font-mono text-xs text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
