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

/** Image-led block. With an `href` it is a link, without one it is a plain tile. */
export type Tile = {
  title: string;
  description: string;
  media: MediaRef;
  href?: string;
};

/** A photograph with an optional short caption: galleries, collages, the Instagram grid. */
export type Shot = {
  media: MediaRef;
  caption?: string;
  /** Where the tile goes, e.g. the matching Instagram post. Leave out until real URLs exist. */
  href?: string;
};

/**
 * A dish or drink shown as a card. `price` stays undefined until the client
 * supplies real menu data; `placeholder` marks entries awaiting real content.
 */
export type Showcase = {
  name: string;
  description: string;
  media: MediaRef;
  price?: string;
  placeholder?: boolean;
};

/** A labelled fact. A `null` value renders as a clearly marked placeholder. */
export type Fact = { label: string; value: string | null };

/** Copy block used by the editorial image + text sections. */
export type EditorialCopy = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  cta?: { label: string; href: string };
};

export type MenuItem = { name: string; description: string; tags?: string[] };

export type MenuGroup = { title: string; note?: string; items: MenuItem[] };

export type Room = {
  /** Short label, e.g. "Private Room 01". */
  name: string;
  /** "Private" or "Shared". */
  kind: string;
  description: string;
  media: MediaRef;
  /** Capacity, price and amenities. `null` values show as placeholders until confirmed. */
  details: Fact[];
};

export type Step = { title: string; description: string };

export type Faq = { question: string; answer: string };
