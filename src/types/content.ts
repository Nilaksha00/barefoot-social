/**
 * Content model. Everything the site renders comes through these types, so a
 * headless CMS (Sanity, Contentful, Payload…) can replace `src/content/*` later
 * without touching components.
 */

/** Placeholder colour story used until real photography is supplied. */
export type Tone = "sand" | "ocean" | "dusk" | "palm" | "ink";

export type MediaRef = {
  /** Path in /public or a remote URL. Omit to render a tonal placeholder. */
  src?: string;
  alt: string;
  tone: Tone;
};

export type NavItem = { label: string; href: string };

export type PageIntro = {
  eyebrow: string;
  title: string;
  lede: string;
  media: MediaRef;
};

export type Pillar = {
  title: string;
  kicker: string;
  description: string;
  href: string;
  media: MediaRef;
};

export type MenuItem = { name: string; description: string; tags?: string[] };

export type MenuGroup = { title: string; note?: string; items: MenuItem[] };

export type Room = {
  name: string;
  sleeps: string;
  description: string;
  media: MediaRef;
};

export type Step = { title: string; description: string };

export type Faq = { question: string; answer: string };
