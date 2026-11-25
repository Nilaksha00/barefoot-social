import { media, photos } from "@/content/photos";
import type { EditorialCopy, Faq, MenuGroup, PageIntro, Room, Shot, Showcase, Step, Tile } from "@/types/content";

/**
 * Page copy. Nothing here is invented business information: dishes, drinks,
 * prices, capacities, amenities, times and policies are `null`, empty or
 * clearly marked as placeholders until the client supplies them.
 */

const PLACEHOLDER_DISH = "Dish name, description and price will appear here once the menu is confirmed.";
const PLACEHOLDER_DRINK = "Cocktail name, description and price will appear here once the drinks menu is confirmed.";

/* ---------------------------------- Eat ---------------------------------- */

export const eat = {
  intro: {
    eyebrow: "Eat",
    title: "Good food. Good mood.",
    lede: "Simple, generous food for after a day by the ocean. Sri Lankan and Mediterranean-inspired, and made for hungry people.",
    media: media(photos.riceAndCurry, "A Sri Lankan meal served on a leaf", "sand"),
  } satisfies PageIntro,

  philosophy: {
    copy: {
      eyebrow: "Our food",
      title: "Two coastlines, one table.",
      paragraphs: [
        "Our kitchen takes its cues from two coastlines: the spice, warmth and generosity of Sri Lankan cooking, and the fresh, simple flavours of the Mediterranean.",
        "The idea is easy. Good ingredients, generous plates and food that's made to be shared. Fresh seafood, local ingredients and relaxed breakfasts worth getting out of bed for.",
      ],
    } satisfies EditorialCopy,
    media: media(photos.grilledFish, "Grilled fish and octopus with vegetables and salad", "ocean"),
  },

  highlights: [
    {
      title: "Fresh seafood",
      description: "Made for hungry people after a day by the ocean.",
      media: media(photos.seafoodPlatter, "A platter of fresh seafood", "ocean"),
    },
    {
      title: "Sri Lankan cuisine",
      description: "The flavours of the island, cooked generously.",
      media: media(photos.currySpread, "A spread of Sri Lankan curries", "sand"),
    },
    {
      title: "Mediterranean-inspired",
      description: "Fresh, simple dishes made for sharing.",
      media: media(photos.mezzeTable, "A table of shared Mediterranean-style dishes", "palm"),
    },
    {
      title: "Relaxed breakfasts",
      description: "Slow mornings and plates worth getting out of bed for.",
      media: media(photos.breakfast, "A Sri Lankan breakfast served on platters", "sand"),
    },
  ] satisfies Tile[],

  /** TODO(client): replace the placeholders with real dish names, descriptions and (optionally) prices. */
  signatureDishes: [
    { name: "Signature dish 01", description: PLACEHOLDER_DISH, placeholder: true, media: media(photos.fishBananaLeaf, "Fried fish on a banana leaf with curries", "sand") },
    { name: "Signature dish 02", description: PLACEHOLDER_DISH, placeholder: true, media: media(photos.bowlsTable, "A wooden table topped with bowls of food", "palm") },
    { name: "Signature dish 03", description: PLACEHOLDER_DISH, placeholder: true, media: media(photos.grilledFish, "Grilled fish and octopus with vegetables", "ocean") },
    { name: "Signature dish 04", description: PLACEHOLDER_DISH, placeholder: true, media: media(photos.currySpread, "A variety of curry dishes", "sand") },
  ] satisfies Showcase[],

  breakfast: {
    copy: {
      eyebrow: "Mornings",
      title: "Breakfasts worth getting out of bed for.",
      paragraphs: [
        "Relaxed breakfasts to start your day, whether you're heading out to surf or taking it slow. Generous plates, good coffee and good company.",
      ],
    } satisfies EditorialCopy,
    media: media(photos.breakfastTable, "An outdoor breakfast table with fruit and iced coffee", "sand"),
  },

  gallery: [
    { media: media(photos.riceAndCurry, "Rice and curry served on a leaf") },
    { media: media(photos.seafoodPlatter, "A platter of fresh seafood") },
    { media: media(photos.breakfast, "Breakfast served on platters") },
    { media: media(photos.mezzeTable, "A spread of shared dishes") },
    { media: media(photos.fishBananaLeaf, "Fried fish on a banana leaf") },
    { media: media(photos.bowlsTable, "Bowls of food on a wooden table") },
    { media: media(photos.grilledFish, "Grilled fish and octopus with salad") },
    { media: media(photos.currySpread, "A variety of Sri Lankan curries") },
  ] satisfies Shot[],

  /**
   * TODO(client): add the real menu here as groups of items, and/or set
   * `site.menus.food` to a PDF in /public/menus. Left empty so no dishes or
   * prices are ever invented.
   */
  menu: [] as MenuGroup[],

  cta: {
    title: "Come hungry.",
    body: "Walk in straight from the beach, grab a table and let us feed you.",
    media: media(photos.terrace, "An outdoor terrace with tables overlooking the beach", "sand"),
  },
};

/* --------------------------------- Drink --------------------------------- */

export const drink = {
  intro: {
    eyebrow: "Drink",
    title: "Cocktails with a Sri Lankan soul.",
    lede: "Local ingredients and familiar flavours, in cocktails that are fun to discover and easy to enjoy.",
    media: media(photos.barDim, "A dimly lit bar counter lined with bottles", "dusk"),
  } satisfies PageIntro,

  introduction: {
    copy: {
      eyebrow: "The bar",
      title: "A seat at the bar.",
      paragraphs: [
        "The bar is a relaxed place to meet people: surfers fresh from the water, travellers swapping stories and locals dropping in. Come with friends, or on your own and leave with a few.",
        "Our cocktails lean on local ingredients and Sri Lankan flavours, taking tastes you know and giving them a twist.",
      ],
    } satisfies EditorialCopy,
    media: media(photos.cocktailPour, "A cocktail being poured over ice", "dusk"),
  },

  /** TODO(client): confirm which of these the bar actually uses before launch. */
  flavours: [
    { title: "Arrack", description: "Sri Lanka's native spirit, distilled from coconut palm sap." },
    { title: "Kithul", description: "Treacle from the fishtail palm: smoky, rich and distinctly Sri Lankan." },
    { title: "King coconut", description: "Thambili, bright and refreshing, straight from the shell." },
    { title: "Spice & tea", description: "Cinnamon, curry leaf, ginger and Ceylon tea." },
  ] satisfies Step[],

  /** TODO(client): replace the placeholders with real cocktail names, descriptions and (optionally) prices. */
  signatureCocktails: [
    { name: "Signature cocktail 01", description: PLACEHOLDER_DRINK, placeholder: true, media: media(photos.citrusCocktail, "A citrus cocktail on a bar counter", "dusk") },
    { name: "Signature cocktail 02", description: PLACEHOLDER_DRINK, placeholder: true, media: media(photos.redCocktail, "A red cocktail in a clear glass", "dusk") },
    { name: "Signature cocktail 03", description: PLACEHOLDER_DRINK, placeholder: true, media: media(photos.bartenderStrain, "A bartender straining a cocktail into a glass", "ink") },
  ] satisfies Showcase[],

  experience: {
    eyebrow: "The bar experience",
    title: "Good drinks, easy company.",
    body: "A bar made for lingering. Good drinks, easy company and the kind of conversations that start with \"where are you from?\"",
    media: media(photos.terrace, "An outdoor terrace overlooking the beach", "dusk"),
  },

  gallery: [
    { media: media(photos.cocktailPour, "A cocktail being poured over ice") },
    { media: media(photos.citrusCocktail, "A citrus cocktail on a bar counter") },
    { media: media(photos.barDim, "A dimly lit bar counter") },
    { media: media(photos.bartenderDim, "A bartender preparing a cocktail at a dimly lit bar") },
    { media: media(photos.bartenderStrain, "A bartender straining a cocktail") },
    { media: media(photos.redCocktail, "A red cocktail in a glass") },
    { media: media(photos.friendsDrinks, "Friends holding drinks together") },
    { media: media(photos.friendsTalking, "Two friends talking over drinks") },
  ] satisfies Shot[],

  /**
   * TODO(client): add the real drinks menu as groups of items, and/or set
   * `site.menus.drinks` to a PDF in /public/menus.
   */
  menu: [] as MenuGroup[],

  cta: {
    title: "Pull up a seat.",
    body: "Find us in Weligama, or get in touch with a question.",
    media: media(photos.bartenderDim, "A bartender preparing a cocktail at a dimly lit bar", "ink"),
  },
};

/* ---------------------------------- Stay --------------------------------- */

export const stay = {
  intro: {
    eyebrow: "Stay",
    title: "A place to rest your head.",
    lede: "Two private rooms and one shared hostel room: a laid-back base between beach days.",
    media: media(photos.roomWhite, "A bright bedroom with linen and timber", "ocean"),
  } satisfies PageIntro,

  introduction: {
    copy: {
      eyebrow: "Private or shared",
      title: "Your own space, or a bed among friends.",
      paragraphs: [
        "Whether you prefer your own private space or a shared room with fellow travellers, Barefoot has a place for you.",
        "We have two private rooms and one shared hostel room, with the restaurant, the bar and surf lessons all under the same roof.",
      ],
    } satisfies EditorialCopy,
  },

  /**
   * TODO(client): fill in each room's capacity, price and amenities. `null`
   * values show as "To be confirmed" until then.
   */
  rooms: [
    {
      name: "Private Room 01",
      kind: "Private",
      description: "A private room of your own: a quiet place to rest after a day by the ocean.",
      media: media(photos.roomGreenery, "A bedroom with a large window onto lush greenery", "palm"),
      details: [
        { label: "Sleeps", value: null },
        { label: "Price", value: null },
        { label: "Amenities", value: null },
      ],
    },
    {
      name: "Private Room 02",
      kind: "Private",
      description: "A second private room, with the same easygoing welcome and your own space to unwind.",
      media: media(photos.canopyBed, "A canopy bed with white netting in a sunlit bedroom", "sand"),
      details: [
        { label: "Sleeps", value: null },
        { label: "Price", value: null },
        { label: "Amenities", value: null },
      ],
    },
    {
      name: "Shared Hostel Room",
      kind: "Shared",
      description: "A bed in a shared room: the easy way to meet fellow travellers between beach days.",
      media: media(photos.roomFan, "A shared hostel room with bunk beds", "ocean"),
      details: [
        { label: "Number of beds", value: null },
        { label: "Price per bed", value: null },
        { label: "Amenities", value: null },
      ],
    },
  ] satisfies Room[],

  /** Only what the brief confirms. Add room amenities (Wi-Fi, air conditioning, bathrooms…) once confirmed. */
  facilities: [
    { title: "Restaurant", description: "Sri Lankan and Mediterranean-inspired food, on site." },
    { title: "Bar", description: "Cocktails with a Sri Lankan soul, a few steps from your room." },
    { title: "Surf lessons", description: "For beginners and anyone looking to improve." },
    { title: "Social space", description: "A place to meet fellow guests, locals and surfers." },
  ] satisfies Step[],

  bookingFacts: [
    { label: "Where to book", value: "Booking.com" },
    { label: "Check-in", value: null },
    { label: "Check-out", value: null },
    { label: "Cancellation", value: null },
  ],

  faqs: [
    { question: "How do I book a room or a bed?", answer: "Private rooms and hostel beds are booked through our Booking.com page. This website only collects enquiries and doesn't confirm bookings." },
    { question: "Can I ask a question before I book?", answer: "Of course. Send us a message through the enquiry form on our Find Us page and we'll get back to you." },
    { question: "What's the difference between a private and a shared room?", answer: "We have two private rooms and one shared hostel room. A private room is yours alone; the hostel room is a shared space with fellow travellers." },
    { question: "What are the check-in and check-out times?", answer: "We'll confirm check-in and check-out times here soon. In the meantime, just ask us." },
    { question: "Do I need to stay with you to eat or drink?", answer: "Not at all. Come straight from the beach for lunch, or pull up a seat at the bar." },
  ] satisfies Faq[],

  cta: {
    title: "Stay a little longer.",
    body: "Book your stay on Booking.com, or send us a question first.",
    media: media(photos.roomGreenery, "A bedroom with a large window onto lush greenery", "palm"),
  },
};

/* ---------------------------------- Surf --------------------------------- */

export const surf = {
  intro: {
    eyebrow: "Surf",
    title: "Find your wave.",
    lede: "From your first time on a board to finding your confidence in the water, our surf lessons are part of the Barefoot experience.",
    media: media(photos.surfers, "Surfers riding waves in Weligama Bay", "ocean"),
  } satisfies PageIntro,

  introduction: {
    copy: {
      eyebrow: "Weligama Bay",
      title: "Learn where it's friendly.",
      paragraphs: [
        "Weligama Bay is one of the friendliest places on the island to learn. Our lessons are part of life at Barefoot: surf in the morning, then come back for food, drinks and the people you met in the water.",
      ],
    } satisfies EditorialCopy,
    media: media(photos.surfLesson, "A group carrying surfboards into the ocean", "ocean"),
  },

  lessons: [
    {
      title: "Beginner lessons",
      description: "Never surfed before? Start here. Your first time on a board, with guidance from your instructor.",
      media: media(photos.surfLineup, "A group sitting on surfboards in the water", "ocean"),
    },
    {
      title: "Improving surfers",
      description: "Had a few sessions already? Keep building your confidence and find your rhythm in the water.",
      media: media(photos.surfWave, "A surfer riding a wave", "ocean"),
    },
  ] satisfies Tile[],

  expect: [
    { title: "Your lesson", description: "However experienced you are, lessons are built around you and the conditions on the day." },
    { title: "Instructor guidance", description: "Your instructor will guide you through the basics and help you build confidence in the water." },
    { title: "Equipment", description: "Equipment details will be confirmed here soon." },
  ] satisfies Step[],

  gallery: [
    { media: media(photos.surfers, "Surfers riding waves in Weligama Bay") },
    { media: media(photos.surfLesson, "A group carrying surfboards into the ocean") },
    { media: media(photos.surfLineup, "A group sitting on surfboards in the water") },
    { media: media(photos.surfboardRow, "A row of surfboards on the sand") },
    { media: media(photos.surfboardsVan, "Surfboards leaning against a van by the sea") },
    { media: media(photos.surfWave, "A surfer riding a wave") },
    { media: media(photos.surfersSunset, "Three surfers walking into the ocean at sunset") },
    { media: media(photos.beachGroup, "Friends relaxing on the sand after a session") },
  ] satisfies Shot[],

  /** TODO(client): confirm each of these. `null` shows "To be confirmed". */
  lessonInfo: [
    { label: "Duration", value: null },
    { label: "Price", value: null },
    { label: "Skill levels", value: "Beginners and improving surfers" },
    { label: "Private or group lessons", value: null },
  ],

  faqs: [
    { question: "Is it suitable for beginners?", answer: "Yes. Lessons are for first-timers as well as people looking to improve their surfing." },
    { question: "What should I bring?", answer: "We'll confirm what to bring here soon. If you're unsure, ask us in your enquiry." },
    { question: "Are surfboards provided?", answer: "Equipment details will be confirmed here soon. Ask us in your enquiry and we'll let you know." },
    { question: "How do I book a lesson?", answer: "Send us a surf lesson enquiry using the form on this page and we'll get back to you to arrange it." },
  ] satisfies Faq[],

  cta: {
    title: "Let's get in the water.",
    body: "Tell us your level and when you'd like to surf, and we'll take it from there.",
    media: media(photos.surfersSunset, "Three surfers walking into the ocean at sunset", "ocean"),
  },
};

/* ------------------------------- Our Story ------------------------------- */

export const story = {
  intro: {
    eyebrow: "Our story",
    title: "More than just a place to stay.",
    lede: "A social house in Weligama where locals, surfers and travellers can all feel at home.",
    media: media(photos.bayPalms, "A palm-fringed bay in Weligama", "palm"),
  } satisfies PageIntro,

  /** The brand story, from the client's brief. */
  paragraphs: [
    "We wanted to create a social house in Weligama where locals, surfers and travellers could all feel at home.",
    "Somewhere you can come straight from the beach for lunch, pull up a seat at the bar on your own, or stay a few nights and get to know the people around you.",
    "So Barefoot Social brings it all under one roof: a restaurant serving Sri Lankan and Mediterranean-inspired food, a bar with cocktails built on local Sri Lankan flavours, two private rooms and a shared hostel room, and surf lessons for beginners and anyone looking to improve.",
    "Relaxed, welcoming and a little bit independent. Come as you are.",
  ],

  philosophy: [
    { title: "Eat.", description: "Simple, generous food for hungry people, inspired by Sri Lankan and Mediterranean flavours." },
    { title: "Drink.", description: "Cocktails with a Sri Lankan soul, fun to discover and easy to enjoy." },
    { title: "Stay.", description: "A laid-back base between beach days, private or shared." },
    { title: "Connect.", description: "A place to meet people, share stories and make memories." },
  ] satisfies Step[],

  community: {
    eyebrow: "The community",
    title: "Locals, surfers and travellers.",
    body: "Barefoot is for everyone who ends up in Weligama: the locals who call it home, the surfers chasing the next wave and the travellers passing through. Pull up a seat and you'll meet all three.",
    tiles: [
      { title: "Locals", description: "The people who make Weligama home.", media: media(photos.friendsTalking, "Two friends talking over drinks", "dusk") },
      { title: "Surfers", description: "Here for the waves, and the company after.", media: media(photos.surfLesson, "A group carrying surfboards into the ocean", "ocean") },
      { title: "Travellers", description: "Passing through, and often staying longer.", media: media(photos.beachGroup, "Friends relaxing on the sand", "sand") },
    ] satisfies Tile[],
  },

  experience: {
    eyebrow: "The Barefoot experience",
    title: "Food, drinks, a bed and a wave.",
    shots: [
      { media: media(photos.riceAndCurry, "Rice and curry served on a leaf", "sand"), caption: "Eat" },
      { media: media(photos.citrusCocktail, "A citrus cocktail on a bar counter", "dusk"), caption: "Drink" },
      { media: media(photos.roomGreenery, "A bedroom onto tropical greenery", "palm"), caption: "Stay" },
      { media: media(photos.surfers, "Surfers riding waves", "ocean"), caption: "Surf" },
      { media: media(photos.breakfast, "A relaxed breakfast spread", "sand"), caption: "Slow mornings" },
      { media: media(photos.friendsDrinks, "Friends holding drinks together", "dusk"), caption: "Connect" },
    ] satisfies Shot[],
  },

  cta: {
    title: "Come be part of it.",
    body: "Stay a few nights, take a lesson, or just pull up a seat. We'll save you a spot.",
    media: media(photos.sunsetSilhouettes, "People silhouetted on the beach at sunset", "dusk"),
  },
};

/* ------------------------------- Find Us --------------------------------- */

export const findUs = {
  intro: {
    eyebrow: "Find us",
    title: "Come find us.",
    lede: "In Weligama, on the south coast of Sri Lanka. Sandy feet welcome.",
    media: media(photos.stiltPoles, "Waves breaking around wooden fishing stilts off the beach", "ocean"),
  } satisfies PageIntro,

  enquiryTypes: [
    { value: "accommodation", label: "Accommodation", hint: "Rooms and hostel beds" },
    { value: "restaurant", label: "Restaurant", hint: "Food and tables" },
    { value: "bar", label: "Bar", hint: "Drinks and evenings" },
    { value: "surf", label: "Surf lessons", hint: "Lessons and levels" },
    { value: "general", label: "General enquiry", hint: "Anything else" },
  ],

  faqs: [
    { question: "Where are you?", answer: "Barefoot Social is in Weligama, on the south coast of Sri Lanka. We'll add the exact address and map pin here soon." },
    { question: "Do I need to stay with you to eat or drink?", answer: "Not at all. Come straight from the beach for lunch, or pull up a seat at the bar." },
    { question: "How do I book a room?", answer: "Private rooms and hostel beds are booked through our Booking.com page. This website only collects enquiries and doesn't confirm bookings." },
    { question: "I've never surfed. Can I still take a lesson?", answer: "Yes. Lessons are for first-timers as well as people looking to improve." },
    { question: "How can I get in touch?", answer: "Use the enquiry form on this page and pick the topic that fits best. We'll get back to you." },
  ] satisfies Faq[],
};
