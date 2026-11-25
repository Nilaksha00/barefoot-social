import { media, photos } from "@/content/photos";
import type { EditorialCopy, MediaRef, Shot, Tile } from "@/types/content";

/* 1. Hero */
export const hero = {
  eyebrow: "Barefoot Social · Weligama",
  title: "Eat. Drink. Stay. Connect.",
  body: "Your social house by the ocean. Come for the food, stay for the people.",
  video: {
    /**
     * Looping background clip. Sample footage: "Waves of the sea arriving at a beach",
     * Mixkit (mixkit.co, clip 44482), free for commercial use under the Mixkit Stock Video Free License.
     * TODO(client): replace with the client's own footage, e.g. "/videos/hero.mp4" in /public.
     */
    src: "https://assets.mixkit.co/videos/44482/44482-720.mp4",
    /** Lighter file for phones. */
    srcMobile: "https://assets.mixkit.co/videos/44482/44482-360.mp4",
    /** Shown while the video loads, and instead of it for reduced motion. */
    poster: `${photos.bayPalms}?auto=format&fit=crop&w=1600&q=70`,
  },
};

/* 2. Introduction */
export const intro = {
  eyebrow: "Straight from the beach",
  title: "A place to feel at home.",
  paragraphs: [
    "We wanted to create a social house in Weligama where locals, surfers and travellers could all feel at home. Somewhere you can come straight from the beach for lunch, pull up a seat at the bar on your own, or stay a few nights and get to know the people around you.",
  ],
  media: media(photos.stiltPoles, "Waves breaking around wooden fishing stilts off the beach", "ocean"),
};

/* 3. Eat. Drink. Stay. Surf. */
export const pillars: Tile[] = [
  {
    title: "Eat",
    description: "Simple, generous food made for hungry people after a day by the ocean.",
    href: "/eat",
    media: media(photos.riceAndCurry, "Rice and curry served on a leaf", "sand"),
  },
  {
    title: "Drink",
    description: "Cocktails with a Sri Lankan soul.",
    href: "/drink",
    media: media(photos.citrusCocktail, "A citrus cocktail on a bar counter", "dusk"),
  },
  {
    title: "Stay",
    description: "A laid-back base between beach days.",
    href: "/stay",
    media: media(photos.roomGreenery, "A bedroom opening onto tropical greenery", "palm"),
  },
  {
    title: "Surf",
    description: "Find your wave with our surf lessons.",
    href: "/surf",
    media: media(photos.surfers, "Surfers riding waves in Weligama Bay", "ocean"),
  },
];

/* 4. Food preview */
export const foodPreview: { copy: EditorialCopy; main: MediaRef; extras: MediaRef[] } = {
  copy: {
    eyebrow: "Eat",
    title: "Good food. Good mood.",
    paragraphs: [
      "Simple, generous food inspired by Sri Lankan and Mediterranean flavours. Fresh seafood, local ingredients and relaxed breakfasts worth getting out of bed for.",
    ],
    cta: { label: "Explore Our Food", href: "/eat" },
  },
  main: media(photos.riceAndCurry, "A Sri Lankan meal served on a leaf", "sand"),
  extras: [
    media(photos.seafoodPlatter, "A platter of fresh seafood", "ocean"),
    media(photos.mezzeTable, "A table of shared Mediterranean-style dishes", "sand"),
    media(photos.breakfast, "A relaxed breakfast spread", "sand"),
  ],
};

/* 5. Bar preview */
export const barPreview: { copy: EditorialCopy; main: MediaRef; extras: MediaRef[] } = {
  copy: {
    eyebrow: "Drink",
    title: "Cocktails with a Sri Lankan soul.",
    paragraphs: [
      "Local ingredients and familiar flavours come together in cocktails that are fun to discover and easy to enjoy. Pull up a seat and stay a little longer.",
    ],
    cta: { label: "Discover The Bar", href: "/drink" },
  },
  main: media(photos.citrusCocktail, "A citrus cocktail on a bar counter", "dusk"),
  extras: [
    media(photos.cocktailPour, "A cocktail being poured over ice", "dusk"),
    media(photos.barDim, "A dimly lit bar counter lined with bottles", "ink"),
  ],
};

/* 6. Accommodation preview: the rooms themselves live in `stay.rooms` (pages.ts). */
export const stayPreview = {
  eyebrow: "Stay",
  title: "A place to rest your head.",
  body: "Whether you prefer your own private space or a shared room with fellow travellers, Barefoot has a place for you.",
  cta: { label: "Explore Our Rooms", href: "/stay" },
};

/* 7. Surf preview */
export const surfPreview = {
  eyebrow: "Surf",
  title: "Find your wave.",
  body: "From your first time on a board to finding your confidence in the water, our surf lessons are part of the Barefoot experience.",
  cta: { label: "Explore Surf Lessons", href: "/surf" },
  media: media(photos.surfersSunset, "Three surfers walking into the ocean at sunset", "ocean"),
};

/* 8. Social experience: six candid moments for the asymmetrical collage */
export const social = {
  eyebrow: "Connect",
  title: "More than just a place to stay.",
  body: "A place to meet people, share stories, enjoy good food and make memories between beach days.",
  shots: [
    { media: media(photos.surfLesson, "A group carrying surfboards into the ocean", "ocean"), caption: "Surf mornings" },
    { media: media(photos.breakfastTable, "An outdoor breakfast table with fruit and iced coffee", "sand"), caption: "Slow breakfasts" },
    { media: media(photos.friendsDrinks, "Friends holding drinks together", "dusk"), caption: "Drinks with new friends" },
    { media: media(photos.beachGroup, "A group of friends sitting on the sand", "sand"), caption: "Between beach days" },
    { media: media(photos.bartenderStrain, "A bartender straining a cocktail into a glass", "ink"), caption: "Behind the bar" },
    { media: media(photos.sunsetSilhouettes, "People silhouetted on the beach at sunset", "dusk"), caption: "Sunset by the sea" },
  ] satisfies Shot[],
};

/* 9. Instagram preview. Not real posts: sample photos until the account is connected. */
export const instagram: { title: string; shots: Shot[] } = {
  title: "Life at Barefoot.",
  shots: [
    { media: media(photos.surfLesson, "Life at Barefoot: surfers heading into the water", "ocean") },
    { media: media(photos.riceAndCurry, "Life at Barefoot: lunch on a leaf", "sand") },
    { media: media(photos.citrusCocktail, "Life at Barefoot: a cocktail at the bar", "dusk") },
    { media: media(photos.sunsetSilhouettes, "Life at Barefoot: sunset on the beach", "dusk") },
    { media: media(photos.roomWhite, "Life at Barefoot: a bright room", "ocean") },
    { media: media(photos.barDim, "Life at Barefoot: evenings at the bar", "ink") },
  ],
};

/* 10. Location */
export const location = {
  eyebrow: "Visit",
  title: "Find us in Weligama.",
  body: "Barefoot Social is located in Weligama, Sri Lanka.",
};

/* 11. Final CTA */
export const closing = {
  title: "Come as you are. Stay a little longer.",
  body: "Pull up a seat, drop your shoulders and stay as long as you like. Whether you're here for lunch or a few nights, there's room for you.",
  media: media(photos.beachPalms, "A sunny beach with palm trees and crashing waves", "palm"),
};
