// Fixed ambient background: warm + cool radial glows behind everything
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-40 top-10 h-[520px] w-[520px] glow-warm" />
      <div className="absolute -right-32 top-1/3 h-[560px] w-[560px] glow-cool" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] glow-warm opacity-60" />
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
