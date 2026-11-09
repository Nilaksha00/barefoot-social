import { photos } from "@/content/photos";
import type { Pillar } from "@/types/content";

export const hero = {
  titleTop: "Weligama,",
  titleBottom: "we’re almost home.",
  /**
   * Looping background clip. Sample footage: "Waves of the sea arriving at a beach",
   * Mixkit (mixkit.co, clip 44482), free for commercial use under the Mixkit Stock Video Free License.
   * TODO(client): replace with the client's own footage, e.g. "/videos/hero.mp4" in /public.
   */
  video: {
    src: "https://assets.mixkit.co/videos/44482/44482-720.mp4",
    /** Lighter file for phones. */
    srcMobile: "https://assets.mixkit.co/videos/44482/44482-360.mp4",
    /** Shown while the video loads, and instead of it for reduced motion. */
    poster: `${photos.bayPalms}?auto=format&fit=crop&w=1600&q=70`,
  },
};

/** The story, from the client's brief. */
export const intro = {
  eyebrow: "Straight from the beach",
  title: "Your Social House",
  paragraphs: [
    "We wanted a place in Weligama where locals, surfers and travellers could all feel at home.",
    "Come straight from the beach for lunch, pull up a seat at the bar on your own, or stay a few nights and get to know the people around you.",
    "Walk in, drop your shoulders, and stay a little longer.",
  ],
};

export const pillars: Pillar[] = [
  {
    title: "Eat",
    kicker: "Food for hungry people",
    description: "Sri Lankan cooking meets the Mediterranean. Fresh seafood and slow breakfasts.",
    href: "/eat",
    media: { src: photos.riceAndCurry, alt: "Rice and curry on a leaf", tone: "sand" },
  },
  {
    title: "Drink",
    kicker: "Cocktails with a Sri Lankan soul",
    description: "Local ingredients in drinks that are fun to discover and easy to enjoy.",
    href: "/drink",
    media: { src: photos.citrusCocktail, alt: "Arrack cocktail", tone: "dusk" },
  },
  {
    title: "Stay",
    kicker: "Private rooms and hostel beds",
    description: "A laid-back base between beach days, with people to meet.",
    href: "/stay",
    media: { src: photos.roomGreenery, alt: "Room opening onto greenery", tone: "ocean" },
  },
  {
    title: "Surf",
    kicker: "Lessons for every level",
    description: "Your first time on a board, or getting more comfortable in the water.",
    href: "/surf",
    media: { src: photos.surfers, alt: "Surfers at Weligama beach", tone: "ocean" },
  },
];

export const closing = {
  title: "Stay a little longer.",
  body: "Rooms and hostel beds are booked on Booking.com. Got a question first? Message us on WhatsApp or email.",
};
