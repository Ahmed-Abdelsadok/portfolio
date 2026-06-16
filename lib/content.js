// ============================================================================
//  ✏️  EDIT YOUR PORTFOLIO HERE  —  English / Français / العربية
//  • Links, images, tech, email (same in every language) live in `shared`.
//  • Translatable text lives in T.en / T.fr / T.ar.
//  • getContent(lang) merges them into the shape the components read.
// ============================================================================

const shared = {
  name: "Ahmed Abdelsadok",
  initials: "AA",
  photo: "/profile.jpg", // your photo (optimized). Replace public/profile.jpg to change it.
  available: true,
  greetings: ["Welcome", "Bienvenue", "مرحبا", "Hola", "こんにちは"],
  email: "abdelsadok.ahmedd@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Ahmed-Abdelsadok" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmed-abdelsadok-9a1958283",
    },
    // Add more anytime, e.g.:
    // { label: "Instagram", href: "https://instagram.com/yourname" },
  ],
  stack: [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Tailwind CSS", "Framer Motion", "Figma", "Git", "PostgreSQL",
  ],
  // Non-translatable project data (keyed by id)
  projects: [
    {
      id: "aurum",
      title: "Aurum Store",
      year: "2025",
      tags: ["Next.js", "E-commerce", "Responsive"],
      href: "https://aurum-store-mu.vercel.app",
      image: "/aurum-store.jpg",
      accent: "from-gold-400/20 to-gold-600/5",
    },
    {
      id: "saun",
      title: "Saun",
      year: "2025",
      tags: ["Flutter", "Real-time", "Geospatial", "Health-tech"],
      href: null,
      image: "/saun.jpg", // dashboard screenshot (optimized). Replace public/saun.jpg to change it.
      accent: "from-emerald-400/20 to-teal-600/5",
    },
  ],
};

const T = {
  // ───────────────────────────── ENGLISH ─────────────────────────────
  en: {
    dir: "ltr",
    profile: {
      roles: ["Software Engineer", "Web Developer", "UI Enthusiast"],
      tagline: "Software engineer / Web / UI-UX",
      location: "Mostaganem, Algeria",
      availableLabel: "Available",
    },
    nav: [
      { id: "home", label: "Home" },
      { id: "work", label: "Work" },
      { id: "services", label: "Services" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      eyebrowSuffix: "Freelance Creative",
      homeTag: "Home",
      headline: "Premium digital work with a **clear visual signal.**",
      subtext: "Web, design, and clean code shaped to feel polished — fast.",
      primaryCta: "See selected work",
      secondaryCta: "Start a conversation",
      badge: { kicker: "Available now", line: "Freelance / contract" },
      tags: ["Web Build", "UI / UX", "Clean Code"],
    },
    features: [
      { title: "Code + taste", text: "Software engineering with a strong visual instinct." },
      { title: "Full-stack", text: "From backend logic to frontend polish." },
      { title: "Clarity first", text: "Products that make sense fast and feel premium." },
    ],
    howIWorkLabel: "How I work",
    howIWork: [
      { title: "Built to feel obvious", text: "Clear hierarchy and sharp pacing." },
      { title: "Engineered for real use", text: "Responsive and dependable." },
      { title: "Strong product presence", text: "One tone across every touchpoint." },
    ],
    work: {
      label: "Selected Work",
      title: "Things I've designed & built.",
      intro: "A few projects that show range — from clean front-ends to full products.",
    },
    projects: {
      aurum: {
        category: "E-commerce",
        description:
          "A premium jewelry storefront for an Algerian boutique — 316L stainless-steel pieces, clean product pages, cart, and cash-on-delivery checkout with fast nationwide delivery.",
      },
      saun: {
        category: "Graduation Project",
        status: "Local build",
        description:
          "My final-year graduation project: a real-time disease-surveillance platform for Algeria's public health service (SEMEP) — a Flutter citizen app, a doctor portal, and an admin dashboard with a live national risk map that tracks outbreaks by zone.",
      },
    },
    services: {
      label: "Services",
      title: "What I can help you build.",
      toolsLabel: "Tools & tech",
      list: [
        { title: "Web Development", text: "Fast, accessible, SEO-friendly sites and web apps built on modern frameworks.", items: ["Next.js / React", "APIs & databases", "Performance"] },
        { title: "UI / UX Design", text: "Interfaces that feel intentional — clear hierarchy, considered spacing, real polish.", items: ["Design systems", "Prototyping", "Figma"] },
        { title: "Brand & Motion", text: "Identity and micro-interactions that give a product a confident, premium presence.", items: ["Motion design", "Visual identity", "Landing pages"] },
      ],
    },
    about: {
      label: "About",
      heading: "A developer who cares how it looks and how it feels.",
      paragraphs: [
        "I build digital products that are clean under the hood and sharp on the surface. My background sits right between engineering and design, so I sweat both the architecture and the pixels.",
        "Whether it's a landing page, a full web app, or a design system, my goal is the same: something that loads fast, reads clearly, and feels premium.",
      ],
      stats: [
        { value: "20+", label: "Projects shipped" },
        { value: "3+", label: "Years building" },
        { value: "100%", label: "Care per pixel" },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Let's build something with a clear signal.",
      text: "Have a project in mind or just want to say hi? My inbox is open.",
      emailLabel: "Email me at",
      cta: "Start a conversation",
      rights: "All rights reserved.",
      builtWith: "Built with Next.js · Tailwind · Framer Motion",
    },
    intro: {
      question: "In which language shall we begin?",
      prompt: "Welcome — glad you're **here.**",
      sub: "Pick a language, then step inside.",
      enter: "Enter portfolio",
    },
    ui: { language: "Language" },
  },

  // ───────────────────────────── FRANÇAIS ─────────────────────────────
  fr: {
    dir: "ltr",
    profile: {
      roles: ["Ingénieur logiciel", "Développeur web", "Passionné d'UI"],
      tagline: "Ingénieur logiciel / Web / UI-UX",
      location: "Mostaganem, Algérie",
      availableLabel: "Disponible",
    },
    nav: [
      { id: "home", label: "Accueil" },
      { id: "work", label: "Projets" },
      { id: "services", label: "Services" },
      { id: "about", label: "À propos" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      eyebrowSuffix: "Créatif freelance",
      homeTag: "Accueil",
      headline: "Un travail numérique premium avec un **signal visuel clair.**",
      subtext: "Web, design et code propre, façonnés pour un rendu soigné — rapidement.",
      primaryCta: "Voir mes projets",
      secondaryCta: "Démarrer une conversation",
      badge: { kicker: "Disponible", line: "Freelance / contrat" },
      tags: ["Web", "UI / UX", "Code propre"],
    },
    features: [
      { title: "Code + goût", text: "De l'ingénierie logicielle avec un fort instinct visuel." },
      { title: "Full-stack", text: "De la logique backend à la finition frontend." },
      { title: "La clarté d'abord", text: "Des produits clairs au premier coup d'œil et au rendu premium." },
    ],
    howIWorkLabel: "Ma méthode",
    howIWork: [
      { title: "Pensé pour être évident", text: "Hiérarchie claire et rythme précis." },
      { title: "Conçu pour un usage réel", text: "Responsive et fiable." },
      { title: "Une présence produit forte", text: "Un ton unique sur chaque point de contact." },
    ],
    work: {
      label: "Projets sélectionnés",
      title: "Ce que j'ai conçu et codé.",
      intro: "Quelques projets qui montrent l'étendue — du front-end soigné aux produits complets.",
    },
    projects: {
      aurum: {
        category: "E-commerce",
        description:
          "Une boutique de bijoux premium pour une marque algérienne — pièces en acier inoxydable 316L, fiches produits soignées, panier et paiement à la livraison, avec une livraison rapide dans tout le pays.",
      },
      saun: {
        category: "Projet de fin d'études",
        status: "Version locale",
        description:
          "Mon projet de fin d'études : une plateforme de surveillance épidémiologique en temps réel pour le service de santé publique algérien (SEMEP) — une application citoyenne Flutter, un portail médecin et un tableau de bord admin avec une carte nationale des risques en direct qui suit les foyers par zone.",
      },
    },
    services: {
      label: "Services",
      title: "Ce que je peux construire pour vous.",
      toolsLabel: "Outils & technologies",
      list: [
        { title: "Développement web", text: "Sites et applications web rapides, accessibles et optimisés SEO, bâtis sur des frameworks modernes.", items: ["Next.js / React", "API & bases de données", "Performance"] },
        { title: "Design UI / UX", text: "Des interfaces pensées avec intention — hiérarchie claire, espacements maîtrisés, vraie finition.", items: ["Design systems", "Prototypage", "Figma"] },
        { title: "Marque & Animation", text: "Identité et micro-interactions qui donnent au produit une présence affirmée et premium.", items: ["Motion design", "Identité visuelle", "Landing pages"] },
      ],
    },
    about: {
      label: "À propos",
      heading: "Un développeur attentif au rendu comme au ressenti.",
      paragraphs: [
        "Je conçois des produits numériques propres sous le capot et nets en surface. Mon profil se situe entre l'ingénierie et le design, donc je soigne autant l'architecture que les pixels.",
        "Qu'il s'agisse d'une landing page, d'une application web complète ou d'un design system, mon objectif reste le même : quelque chose de rapide, clair et premium.",
      ],
      stats: [
        { value: "20+", label: "Projets livrés" },
        { value: "3+", label: "Années d'expérience" },
        { value: "100%", label: "Soin du détail" },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Construisons quelque chose avec un signal clair.",
      text: "Un projet en tête ou juste envie de dire bonjour ? Ma boîte mail est ouverte.",
      emailLabel: "Écrivez-moi à",
      cta: "Démarrer une conversation",
      rights: "Tous droits réservés.",
      builtWith: "Réalisé avec Next.js · Tailwind · Framer Motion",
    },
    intro: {
      question: "Dans quelle langue commençons-nous ?",
      prompt: "Bienvenue — ravi de vous **voir.**",
      sub: "Choisissez une langue, puis entrez.",
      enter: "Entrer",
    },
    ui: { language: "Langue" },
  },

  // ───────────────────────────── العربية ─────────────────────────────
  ar: {
    dir: "rtl",
    profile: {
      roles: ["مهندس برمجيات", "مطوّر ويب", "مهتم بواجهات المستخدم"],
      tagline: "مهندس برمجيات / ويب / واجهات",
      location: "مستغانم، الجزائر",
      availableLabel: "متاح",
    },
    nav: [
      { id: "home", label: "الرئيسية" },
      { id: "work", label: "الأعمال" },
      { id: "services", label: "الخدمات" },
      { id: "about", label: "نبذة" },
      { id: "contact", label: "تواصل" },
    ],
    hero: {
      eyebrowSuffix: "مبدع مستقل",
      homeTag: "الرئيسية",
      headline: "أعمال رقمية راقية بـ**هوية بصرية واضحة.**",
      subtext: "ويب وتصميم وكود نظيف، مصاغة لتبدو متقنة — وبسرعة.",
      primaryCta: "شاهد أعمالي",
      secondaryCta: "لنبدأ محادثة",
      badge: { kicker: "متاح الآن", line: "عمل حر / تعاقد" },
      tags: ["تطوير ويب", "واجهات", "كود نظيف"],
    },
    features: [
      { title: "كود وذوق", text: "هندسة برمجيات مع حسّ بصري قوي." },
      { title: "متكامل", text: "من منطق الخادم إلى لمسات الواجهة." },
      { title: "الوضوح أولاً", text: "منتجات تُفهم بسرعة وتبدو راقية." },
    ],
    howIWorkLabel: "طريقتي في العمل",
    howIWork: [
      { title: "مصمم ليكون بديهياً", text: "تسلسل واضح وإيقاع دقيق." },
      { title: "مهندس للاستخدام الحقيقي", text: "متجاوب وموثوق." },
      { title: "حضور قوي للمنتج", text: "نبرة واحدة في كل نقطة تواصل." },
    ],
    work: {
      label: "أعمال مختارة",
      title: "أشياء صمّمتها وبنيتها.",
      intro: "بعض المشاريع التي تُظهر تنوّعي — من واجهات أنيقة إلى منتجات متكاملة.",
    },
    projects: {
      aurum: {
        category: "متجر إلكتروني",
        description:
          "متجر مجوهرات راقٍ لعلامة جزائرية — قطع من الفولاذ المقاوم للصدأ 316L، صفحات منتجات أنيقة، سلة شراء، والدفع عند الاستلام مع توصيل سريع لكامل الوطن.",
      },
      saun: {
        category: "مشروع التخرّج",
        status: "نسخة محلية",
        description:
          "مشروع تخرّجي: منصة لمراقبة الأوبئة في الوقت الفعلي لمصلحة الصحة العمومية الجزائرية (SEMEP) — تطبيق مواطن بلغة Flutter، وبوابة للأطباء، ولوحة تحكم إدارية بخريطة وطنية حيّة للمخاطر تتابع البؤر حسب المناطق.",
      },
    },
    services: {
      label: "الخدمات",
      title: "ما الذي يمكنني بناؤه لك.",
      toolsLabel: "الأدوات والتقنيات",
      list: [
        { title: "تطوير الويب", text: "مواقع وتطبيقات ويب سريعة وسهلة الوصول ومهيأة لمحركات البحث، مبنية بأطر عمل حديثة.", items: ["Next.js / React", "واجهات برمجية وقواعد بيانات", "الأداء"] },
        { title: "تصميم الواجهات UI / UX", text: "واجهات مدروسة — تسلسل واضح، مسافات متقنة، ولمسة احترافية حقيقية.", items: ["أنظمة تصميم", "النماذج الأولية", "Figma"] },
        { title: "الهوية والحركة", text: "هوية وتفاعلات دقيقة تمنح المنتج حضوراً واثقاً وراقياً.", items: ["تصميم الحركة", "الهوية البصرية", "صفحات هبوط"] },
      ],
    },
    about: {
      label: "نبذة",
      heading: "مطوّر يهتم بالشكل وبالإحساس معاً.",
      paragraphs: [
        "أبني منتجات رقمية نظيفة في عمقها ودقيقة في مظهرها. خلفيتي تقع بين الهندسة والتصميم، لذا أعتني بالبنية والتفاصيل معاً.",
        "سواء كانت صفحة هبوط أو تطبيق ويب متكامل أو نظام تصميم، هدفي واحد: شيء سريع التحميل، واضح القراءة، وبإحساس راقٍ.",
      ],
      stats: [
        { value: "20+", label: "مشاريع منجزة" },
        { value: "3+", label: "سنوات خبرة" },
        { value: "100%", label: "اهتمام بالتفاصيل" },
      ],
    },
    contact: {
      label: "تواصل",
      heading: "لنبنِ شيئاً بهوية واضحة.",
      text: "لديك مشروع في ذهنك أو تودّ إلقاء التحية فقط؟ بريدي مفتوح.",
      emailLabel: "راسلني على",
      cta: "لنبدأ محادثة",
      rights: "كل الحقوق محفوظة.",
      builtWith: "صُنع بـ Next.js · Tailwind · Framer Motion",
    },
    intro: {
      question: "بأي لغة نبدأ؟",
      prompt: "أهلاً بك — سعيدٌ **بوجودك.**",
      sub: "اختر لغة، ثم ادخل.",
      enter: "ادخل المعرض",
    },
    ui: { language: "اللغة" },
  },
};

const NUM = ["01", "02", "03", "04", "05"];

export function getContent(lang) {
  const t = T[lang] || T.en;
  return {
    lang,
    dir: t.dir,
    profile: {
      name: shared.name,
      initials: shared.initials,
      photo: shared.photo,
      available: shared.available,
      greetings: shared.greetings,
      roles: t.profile.roles,
      tagline: t.profile.tagline,
      location: t.profile.location,
      availableLabel: t.profile.availableLabel,
    },
    nav: t.nav,
    hero: {
      eyebrow: `${t.profile.location} / ${t.hero.eyebrowSuffix}`,
      homeTag: t.hero.homeTag,
      headline: t.hero.headline,
      subtext: t.hero.subtext,
      primaryCta: { label: t.hero.primaryCta, href: "#work" },
      secondaryCta: { label: t.hero.secondaryCta, href: "#contact" },
      badge: t.hero.badge,
      tags: t.hero.tags,
    },
    features: t.features,
    howIWorkLabel: t.howIWorkLabel,
    howIWork: t.howIWork.map((h, i) => ({ no: NUM[i], ...h })),
    work: {
      label: t.work.label,
      title: t.work.title,
      intro: t.work.intro,
      projects: shared.projects.map((p) => ({ ...p, ...t.projects[p.id] })),
    },
    services: {
      label: t.services.label,
      title: t.services.title,
      toolsLabel: t.services.toolsLabel,
      list: t.services.list,
      stack: shared.stack,
    },
    about: {
      label: t.about.label,
      heading: t.about.heading,
      paragraphs: t.about.paragraphs,
      stats: t.about.stats,
    },
    contact: {
      label: t.contact.label,
      heading: t.contact.heading,
      text: t.contact.text,
      emailLabel: t.contact.emailLabel,
      cta: t.contact.cta,
      rights: t.contact.rights,
      builtWith: t.contact.builtWith,
      email: shared.email,
      socials: shared.socials,
    },
    intro: t.intro,
    ui: t.ui,
  };
}

export const languages = [
  { code: "en", label: "English", native: "English", short: "EN" },
  { code: "fr", label: "French", native: "Français", short: "FR" },
  { code: "ar", label: "Arabic", native: "العربية", short: "AR" },
];

export const defaultLang = "en";

// Static metadata for <head> (defaults to English)
export const meta = {
  title: `${shared.name} — Premium digital work with a clear visual signal.`,
  description: T.en.hero.subtext,
};
