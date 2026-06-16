"use client";

import { motion } from "framer-motion";
import { useContent, useLang } from "@/lib/i18n";
import Highlight from "./Highlight";
import { ArrowIcon } from "./icons";
import PortraitOrb from "./PortraitOrb";

const bubblePos = [
  "left-[0%] top-[32%]",
  "right-[2%] top-[18%]",
  "left-[12%] bottom-[12%]",
  "right-[8%] bottom-[8%]",
  "left-[42%] top-[-2%]",
];

export default function IntroGate({ onEnter }) {
  const { profile, intro } = useContent();
  const { lang, setLang, languages } = useLang();

  return (
    <motion.div
      className="fixed inset-0 z-[60] overflow-y-auto bg-base"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none fixed -left-40 top-0 h-[500px] w-[500px] glow-warm" />
      <div className="pointer-events-none fixed -right-40 bottom-0 h-[500px] w-[500px] glow-cool" />

      <div className="relative flex min-h-full flex-col items-center justify-center px-6 py-10">
        <div
          className="animate-rise pill mb-7 !rounded-full !border-gold-400/25 !px-5 font-mono text-[11px] uppercase tracking-[0.3em] text-gold-200"
          style={{ animationDelay: "0.05s" }}
        >
          {profile.name}
        </div>

        <div className="relative mb-7 h-[230px] w-[230px] sm:h-[300px] sm:w-[300px]">
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.55em] text-white/10">
              Portfolio
            </span>
          </div>
          <PortraitOrb className="absolute inset-0" />
          {profile.greetings.slice(0, 5).map((g, i) => (
            <div
              key={g}
              className={`absolute ${bubblePos[i]} animate-float`}
              style={{ animationDelay: `${i * 0.7}s` }}
            >
              <span className="pill !px-3.5 !py-1.5 !text-sm backdrop-blur-md">
                {g}
              </span>
            </div>
          ))}
        </div>

        <h1
          className="animate-rise max-w-3xl text-center text-4xl font-extrabold leading-[1.04] sm:text-5xl"
          style={{ animationDelay: "0.15s" }}
        >
          <Highlight text={intro.prompt} />
        </h1>

        <p
          className="animate-rise mt-4 max-w-md text-center text-zinc-400"
          style={{ animationDelay: "0.25s" }}
        >
          {intro.sub}
        </p>

        <div
          className="animate-rise mt-8 flex flex-col items-center gap-3"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="label">{intro.question}</span>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                className={`pill !px-5 !py-2 transition-colors ${
                  l.code === lang
                    ? "!border-gold-400/40 !bg-gold-400/10 !text-gold-100"
                    : "hover:!border-white/25"
                }`}
              >
                {l.native}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onEnter}
          className="animate-rise btn-gold mt-8"
          style={{ animationDelay: "0.45s" }}
        >
          {intro.enter} <ArrowIcon width={18} height={18} className="rtl:-scale-x-100" />
        </button>
      </div>
    </motion.div>
  );
}
