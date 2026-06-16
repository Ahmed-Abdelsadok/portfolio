import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

// Social share card (1200×630) shown when the link is posted on
// Instagram bio / WhatsApp / LinkedIn / X, etc.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ahmed Abdelsadok — Software Engineer & Web Developer";

export default async function OpengraphImage() {
  // Fonts are bundled in the app dir (no network) so this never fails to render.
  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "app/Sora-400.ttf")),
    readFile(join(process.cwd(), "app/Sora-700.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0c",
          padding: 84,
          position: "relative",
          fontFamily: "Sora",
        }}
      >
        {/* ambient glows */}
        <div
          style={{
            position: "absolute",
            top: -170,
            left: -130,
            width: 580,
            height: 580,
            background:
              "radial-gradient(circle, rgba(234,168,86,0.30), rgba(10,10,12,0))",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -210,
            right: -120,
            width: 560,
            height: 560,
            background:
              "radial-gradient(circle, rgba(70,110,220,0.18), rgba(10,10,12,0))",
          }}
        />

        {/* monogram + label */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 46 }}>
          <div
            style={{
              width: 74,
              height: 74,
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.16)",
              backgroundColor: "rgba(255,255,255,0.03)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#eaa856",
              fontSize: 34,
              fontWeight: 700,
              marginRight: 22,
            }}
          >
            AA
          </div>
          <div style={{ color: "#8a8a93", fontSize: 26, letterSpacing: 6 }}>
            PORTFOLIO
          </div>
        </div>

        <div
          style={{
            color: "#ffffff",
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          Ahmed Abdelsadok
        </div>

        <div
          style={{
            color: "#eaa856",
            fontSize: 44,
            fontWeight: 700,
            marginTop: 26,
            maxWidth: 1000,
            lineHeight: 1.15,
          }}
        >
          Premium digital work with a clear visual signal.
        </div>

        <div
          style={{
            color: "#9a9aa3",
            fontSize: 30,
            fontWeight: 400,
            marginTop: 30,
          }}
        >
          Software Engineer · Web · UI / UX — Mostaganem, Algeria
        </div>

        {/* accent bar */}
        <div
          style={{
            position: "absolute",
            left: 84,
            bottom: 74,
            width: 190,
            height: 6,
            borderRadius: 999,
            background: "linear-gradient(90deg, #f7d9a8, #eaa856, #c97f33)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sora", data: regular, weight: 400, style: "normal" },
        { name: "Sora", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
