import { Sora, JetBrains_Mono, Cairo } from "next/font/google";
import "./globals.css";
import { meta } from "@/lib/content";
import Providers from "./providers";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Arabic typeface (also covers Latin) used when the site is in Arabic.
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata = {
  title: meta.title,
  description: meta.description,
};

// Set lang/dir from the saved choice before paint to avoid an RTL flash.
const noFlash = `try{var l=localStorage.getItem('lang')||'en';document.documentElement.lang=l;document.documentElement.dir=(l==='ar')?'rtl':'ltr';}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${mono.variable} ${cairo.variable}`}
    >
      <body className="font-sans antialiased grain">
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
