"use client";

import Highlight from "./Highlight";
import PortraitOrb from "./PortraitOrb";
import Reveal from "./Reveal";
import { useContent } from "@/lib/i18n";
import { ArrowIcon } from "./icons";

export default function Hero() {
  const { hero } = useContent();

  return (
    <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
      <Reveal className="panel relative overflow-hidden p-7 sm:p-10">
        <span className="pill !py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-200">
          ▦ {hero.homeTag}
        </span>

        <p className="label mt-8">{hero.eyebrow}</p>

        <h1 className="mt-4 text-[clamp(2.4rem,6vw,4.3rem)] font-extrabold leading-[0.98] tracking-tight">
          <Highlight text={hero.headline} />
        </h1>

        <p className="mt-6 max-w-md text-lg text-zinc-400">{hero.subtext}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={hero.primaryCta.href} className="btn-gold">
            {hero.primaryCta.label} <ArrowIcon width={18} height={18} />
          </a>
          <a href={hero.secondaryCta.href} className="btn-ghost">
            {hero.secondaryCta.label}
          </a>
        </div>

        <div className="mt-9 flex flex-wrap gap-2">
          {hero.tags.map((t) => (
            <span
              key={t}
              className="pill !py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="panel relative flex flex-col overflow-hidden p-6">
        <div className="flex items-start justify-between">
          <div className="pill !flex-col !items-start !gap-0 !rounded-2xl !px-4 !py-2.5">
            <span className="label !text-[9px] !tracking-[0.2em] text-emerald-300/80">
              {hero.badge.kicker}
            </span>
            <span className="mt-0.5 text-sm text-zinc-200">{hero.badge.line}</span>
          </div>
          <div className="h-9 w-9 rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(234,168,86,0.4),transparent)]" />
        </div>

        <PortraitOrb className="mx-auto my-auto w-[80%]" />
      </Reveal>
    </div>
  );
}
