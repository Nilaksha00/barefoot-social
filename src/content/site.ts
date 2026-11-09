import type { NavItem } from "@/types/content";

/**
 * Global site settings.
 * TODO(client): values marked PLACEHOLDER must be confirmed before launch.
 */
export const site = {
  name: "Barefoot Social",
  tagline: "Your social house in Weligama",
  description:
    "Barefoot Social is a social house in Weligama, Sri Lanka, for locals, surfers and travellers. Cocktails with a Sri Lankan soul, generous food, private rooms and hostel beds, and surf lessons for every level.",
  url: "https://barefootsocial.lk", // PLACEHOLDER domain
  pillars: ["Eat", "Drink", "Stay", "Connect"],

  nav: [
    { label: "Eat", href: "/eat" },
    { label: "Drink", href: "/drink" },
    { label: "Stay", href: "/stay" },
    { label: "Surf", href: "/surf" },
    { label: "Visit", href: "/visit" },
  ] satisfies NavItem[],

  /** Rooms and hostel beds are booked on Booking.com only. WhatsApp and email are for questions. */
  bookingUrl: "https://www.booking.com/searchresults.html?ss=Barefoot+Social+Weligama", // PLACEHOLDER, swap for the property's own Booking.com page

  contact: {
    whatsapp: "94770000000", // PLACEHOLDER, international format without "+"
    phoneDisplay: "+94 77 000 0000", // PLACEHOLDER
    email: "hello@barefootsocial.lk", // PLACEHOLDER
    instagram: "https://www.instagram.com/barefootsocial", // PLACEHOLDER
    instagramHandle: "@barefootsocial", // PLACEHOLDER
  },

  address: {
    lines: ["New Galle Road", "Weligama 81700", "Sri Lanka"], // PLACEHOLDER
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Weligama%2C%20Sri%20Lanka",
    embedUrl: "https://www.google.com/maps?q=Weligama%20Bay%2C%20Sri%20Lanka&z=14&output=embed",
  },

  // PLACEHOLDER hours, confirm with the client
  hours: [
    { label: "Kitchen", value: "7:30 – 22:00" },
    { label: "Bar", value: "11:00 – late" },
  ],

  timezone: "Asia/Colombo",
} as const;
