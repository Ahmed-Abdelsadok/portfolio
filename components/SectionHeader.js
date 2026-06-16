import Reveal from "./Reveal";

export default function SectionHeader({ index, label, title, intro }) {
  return (
    <Reveal className="mb-9 sm:mb-12">
      <div className="label flex items-center gap-3">
        <span className="text-gold-300">{index}</span>
        <span className="h-px w-8 bg-white/15" />
        {label}
      </div>
      <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-[1.05]">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-xl text-zinc-400">{intro}</p>}
    </Reveal>
  );
}
