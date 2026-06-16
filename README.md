# Portfolio

A premium, dark, bento-style developer portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion** — featuring an animated intro splash, a left icon nav rail, scroll-spy navigation, and motion throughout.

## Run it

```bash
npm install      # already done
npm run dev      # start dev server → http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

## ✏️ Make it yours

**Almost everything lives in one file:** [`lib/content.js`](lib/content.js).
Open it and edit your name, roles, projects, services, about text, and contact
details. The whole site updates automatically.

A few specifics:

- **Your photo** — drop a square image at `public/profile.jpg`, then set
  `photo: "/profile.jpg"` in the `profile` block of `lib/content.js`.
  (Left as `null`, it shows a nice initials placeholder.)
- **Highlighted words** — wrap text in `**double asterisks**` in the headline to
  paint it in the gold accent color.
- **Availability pill** — toggle `available: true/false`.
- **Colors & fonts** — the gold accent palette and fonts live in
  [`tailwind.config.js`](tailwind.config.js) and [`app/layout.js`](app/layout.js).

## Structure

```
app/
  layout.js      → fonts + metadata
  page.js        → assembles the sections + intro gate
  globals.css    → theme tokens, panel/pill/button styles
components/       → IntroGate, Sidebar, TopNav, Hero, Features, Work,
                   Services, About, Contact, PortraitOrb, ...
lib/content.js   → ⭐ all your content
```

## Deploy (free)

Push to GitHub and import the repo on **Vercel** (made by the Next.js team) or
**Netlify**. Both auto-detect Next.js — no config needed.
