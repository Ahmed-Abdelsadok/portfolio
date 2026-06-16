"use client";

import { useContent } from "@/lib/i18n";

// Circular portrait with decorative rotating rings. Shows the photo if
// profile.photo is set, otherwise a tasteful initials placeholder.
export default function PortraitOrb({ className = "" }) {
  const { profile } = useContent();

  return (
    <div className={`relative aspect-square ${className}`}>
      <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
      <div className="absolute inset-[7%] rounded-full border border-white/[0.06]" />
      <div className="absolute inset-[15%] rounded-full border border-gold-400/10 animate-spin-rev" />
      <div className="absolute inset-[22%] rounded-full bg-gold-400/10 blur-3xl" />

      <div className="absolute inset-[20%] overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 shadow-glow">
        {profile.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(234,168,86,0.28),transparent_60%)]">
            <span className="font-mono text-5xl font-semibold gradient-text">
              {profile.initials}
            </span>
          </div>
        )}
      </div>

      {/* orbiting accent dot */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute left-1/2 top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold-300 shadow-glow" />
      </div>
    </div>
  );
}
