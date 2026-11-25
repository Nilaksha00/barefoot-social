import type { MediaRef, Tone } from "@/types/content";

/**
 * Sample photography from Unsplash (free licence) so the draft reads like the
 * real thing. These are stand-ins, not photos of Barefoot Social.
 *
 * TODO(client): replace every entry with the client's own shoot, e.g.
 * `"/images/eat/seafood.jpg"` in /public/images. Every page pulls its photos
 * from this one file, grouped by category, so swapping a photo here updates it
 * everywhere it is used.
 *
 * Shots still worth briefing the photographer on (currently stand-ins):
 * the real bar counter and cocktail prep, both private rooms, the hostel room,
 * lessons and instructors in the water, and candid guests around the house.
 */
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const photos = {
  /* Place and atmosphere */
  bayPalms: unsplash("1558383737-0f1e3f701bde"),
  stiltPoles: unsplash("1643793416018-3eb27ecc1628"),
  terrace: unsplash("1793035200622-c2f7d3386003"),
  beachPalms: unsplash("1776361984656-c3b47412e093"),
  sunsetSilhouettes: unsplash("1583377585350-58a76bfbdb27"),

  /* Surf */
  surfers: unsplash("1742874220119-a42921338e65"),
  surfersSunset: unsplash("1707621786198-c4fdc4af3719"),
  surfLesson: unsplash("1730564725670-11ce15658ac8"),
  surfLineup: unsplash("1638283561964-c7176626086a"),
  surfboardRow: unsplash("1722515261499-6f5c955a99d6"),
  surfboardsVan: unsplash("1743779035871-9653b8c58c24"),
  surfWave: unsplash("1502933691298-84fc14542831"),

  /* Food */
  riceAndCurry: unsplash("1742281095650-dd3c50c08772"),
  breakfast: unsplash("1742281095661-29de44440bb6"),
  breakfastTable: unsplash("1782177261793-823b94aa0555"),
  currySpread: unsplash("1743525700011-afac212694d7"),
  fishBananaLeaf: unsplash("1786222084052-fb6f27bfb135"),
  seafoodPlatter: unsplash("1765100479761-2359e22fbe16"),
  grilledFish: unsplash("1768322264423-4b0adf0cf31b"),
  mezzeTable: unsplash("1748540459503-19efc015143b"),
  bowlsTable: unsplash("1653611540493-b3a896319fbf"),

  /* Drinks and bar */
  barDim: unsplash("1578911489158-334e5cd2a051"),
  citrusCocktail: unsplash("1618799805265-4f27cb61ede9"),
  cocktailPour: unsplash("1470337458703-46ad1756a187"),
  bartenderDim: unsplash("1777791375006-2384a0d27c23"),
  bartenderStrain: unsplash("1779635593390-8b478382885f"),
  redCocktail: unsplash("1563223771-5fe4038fbfc9"),

  /* Rooms */
  roomWhite: unsplash("1582719478250-c89cae4dc85b"),
  roomGreenery: unsplash("1774280954999-9758f11f3d41"),
  roomFan: unsplash("1662841540530-2f04bb3291e8"),
  dorm: unsplash("1709805619372-40de3f158e83"),
  canopyBed: unsplash("1791535767289-434e6c0e85e0"),

  /* People */
  friendsDrinks: unsplash("1568644396922-5c3bfae12521"),
  friendsTalking: unsplash("1485872299829-c673f5194813"),
  beachGroup: unsplash("1637087788331-9881378bdfab"),
} as const;

/** Shorthand for a photo reference. Leave `src` out to show a labelled tonal placeholder. */
export const media = (src: string | undefined, alt: string, tone: Tone = "sand"): MediaRef => ({ src, alt, tone });
