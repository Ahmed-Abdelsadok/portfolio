"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { useContent } from "@/lib/i18n";
import { ArrowIcon } from "./icons";

export default function Work() {
  const { work } = useContent();
  const projects = work.projects;

  return (
    <>
      <SectionHeader
        index="01"
        label={work.label}
        title={work.title}
        intro={work.intro}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => {
          const hasLink = p.href && p.href !== "#";
          const Wrapper = hasLink ? "a" : "div";
          const linkProps = hasLink
            ? { href: p.href, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <Reveal key={p.id} delay={i * 0.06}>
              <Wrapper
                {...linkProps}
                className="panel panel-hover group block overflow-hidden p-5 sm:p-6"
              >
                <div className="relative mb-6 h-44 overflow-hidden rounded-2xl border border-white/5">
                  {p.image ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10" />
                    </>
                  ) : (
                    <div
                      className={`grid h-full w-full place-items-center bg-gradient-to-br ${p.accent}`}
                    >
                      <span className="font-mono text-7xl font-bold text-white/10">
                        0{i + 1}
                      </span>
                    </div>
                  )}
                  <span className="label absolute end-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-white/85 backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="label">
                      {p.category} · {p.year}
                    </div>
                    <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                  </div>
                  {hasLink ? (
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:-rotate-12 group-hover:bg-gold-400/15 group-hover:text-gold-200">
                      <ArrowIcon width={18} height={18} className="rtl:-scale-x-100" />
                    </span>
                  ) : p.status ? (
                    <span className="shrink-0 self-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                      {p.status}
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="pill !py-1 !text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
