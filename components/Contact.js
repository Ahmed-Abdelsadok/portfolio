"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { useContent } from "@/lib/i18n";
import { ArrowIcon } from "./icons";

export default function Contact() {
  const { contact, profile } = useContent();

  return (
    <>
      <SectionHeader
        index="04"
        label={contact.label}
        title={contact.heading}
        intro={contact.text}
      />
      <Reveal>
        <div className="panel relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute -end-20 -top-24 h-72 w-72 glow-warm" />
          <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="label">{contact.emailLabel}</div>
              <a
                href={`mailto:${contact.email}`}
                dir="ltr"
                className="gradient-text mt-2 block break-all text-2xl font-bold sm:text-4xl"
              >
                {contact.email}
              </a>
            </div>
            <a href={`mailto:${contact.email}`} className="btn-gold shrink-0">
              {contact.cta} <ArrowIcon width={18} height={18} className="rtl:-scale-x-100" />
            </a>
          </div>

          <div className="relative mt-10 flex flex-wrap gap-2.5 border-t border-white/10 pt-8">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="pill hover:!border-white/25 hover:!text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
        <div>
          © {new Date().getFullYear()} {profile.name}. {contact.rights}
        </div>
        <div className="label">{contact.builtWith}</div>
      </div>
    </>
  );
}
