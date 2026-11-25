import type { NavItem } from "@/types/content";

type Contact = {
  /** International format without "+", e.g. "94771234567". */
  whatsapp: string | null;
  /** Shown as text, e.g. "+94 77 123 4567". */
  phoneDisplay: string | null;
  email: string | null;
  /** Full profile URL. */
  instagram: string | null;
  /** e.g. "@barefootsocial". */
  instagramHandle: string | null;
};

type Hours = { label: string; value: string | null };

/**
 * Global site settings.
 *
 * Nothing here is invented. Anything the client has not supplied yet is `null`,
 * and every component shows a clearly labelled "coming soon" state for it
 * instead of a made-up value. Fill these in as the details arrive:
 * WhatsApp links, the email and Instagram buttons, the menu downloads and the
 * opening hours all switch on automatically.
 */
export const site = {
  name: "Barefoot Social",
  tagline: "Your social house in Weligama",
  description:
    "Barefoot Social is a social house in Weligama, Sri Lanka, for locals, surfers and travellers. Cocktails with a Sri Lankan soul, generous food, private rooms and a shared hostel room, and surf lessons for every level.",
  url: "https://barefootsocial.lk", // PLACEHOLDER domain
  pillars: ["Eat", "Drink", "Stay", "Connect"],

  nav: [
    { label: "Home", href: "/" },
    { label: "Eat", href: "/eat" },
    { label: "Drink", href: "/drink" },
    { label: "Stay", href: "/stay" },
    { label: "Surf", href: "/surf" },
    { label: "Our Story", href: "/our-story" },
    { label: "Find Us", href: "/find-us" },
  ] satisfies NavItem[],

  /** Label for the primary booking button, used everywhere. */
  bookLabel: "Book Your Stay",

  /**
   * Rooms and hostel beds are booked on Booking.com. The site only collects
   * enquiries, it never confirms a booking itself.
   */
  bookingUrl: "https://www.booking.com/searchresults.html?ss=Barefoot+Social+Weligama", // PLACEHOLDER, swap for the property's own Booking.com page

  contact: {
    whatsapp: null, // PLACEHOLDER, awaiting the client
    phoneDisplay: null, // PLACEHOLDER
    email: null, // PLACEHOLDER
    instagram: null, // PLACEHOLDER
    instagramHandle: null, // PLACEHOLDER
  } as Contact,

  address: {
    /** Town only until the client confirms the street address. */
    lines: ["Weligama", "Southern Province, Sri Lanka"],
    confirmed: false, // PLACEHOLDER: set to true once `lines` holds the full street address
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Weligama%2C%20Sri%20Lanka",
    // PLACEHOLDER: shows Weligama Bay until the exact pin is provided. Swap for the Google Maps "Embed a map" URL.
    embedUrl: "https://www.google.com/maps?q=Weligama%20Bay%2C%20Sri%20Lanka&z=14&output=embed",
  },

  /** Set the value (e.g. "7:30 – 22:00") once the client confirms it. `null` shows "To be confirmed". */
  hours: [
    { label: "Restaurant", value: null },
    { label: "Bar", value: null },
  ] as Hours[],

  /** Downloadable menus, e.g. "/menus/food.pdf" in /public. `null` hides the download button. */
  menus: {
    food: null as string | null,
    drinks: null as string | null,
  },

  timezone: "Asia/Colombo",
};
