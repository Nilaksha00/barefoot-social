import { photos } from "@/content/photos";
import type { Faq, MenuGroup, PageIntro, Room, Step } from "@/types/content";

/* ---------------------------------- Eat ---------------------------------- */

export const eat = {
  intro: {
    eyebrow: "Eat",
    title: "Made for hungry people.",
    lede: "Simple, generous food for after a day by the ocean. Sri Lankan cooking with a Mediterranean streak, fresh seafood off the Weligama boats, and breakfasts worth getting out of bed for.",
    media: { src: photos.breakfast, alt: "Breakfast spread on a shared table", tone: "sand" },
  } satisfies PageIntro,
  menu: [
    {
      title: "Breakfast",
      note: "7:30 – 11:30",
      items: [
        { name: "Egg hoppers", description: "Crisp rice hoppers, lunu miris, seeni sambol.", tags: ["GF"] },
        { name: "Shakshuka, island style", description: "Eggs baked in tomato and curry leaf, pol roti for dipping.", tags: ["V"] },
        { name: "Post-surf bowl", description: "Curd, kithul, toasted coconut, tropical fruit.", tags: ["V"] },
        { name: "Barefoot breakfast", description: "Eggs your way, sourdough, grilled tomato, avocado, pol sambol." },
      ],
    },
    {
      title: "Lunch & dinner",
      note: "12:00 – 22:00",
      items: [
        { name: "Catch of the day", description: "Grilled whole, ambul thiyal butter, herb salad, lemon.", tags: ["GF"] },
        { name: "Devilled calamari", description: "Wok-fired with peppers and onion, garlic aioli." },
        { name: "Prawn & curry leaf linguine", description: "Lagoon prawns, chilli, garlic, coconut cream." },
        { name: "Mezze for the table", description: "Hummus, baba ghanoush, coconut sambol, roti and flatbread.", tags: ["VG"] },
        { name: "Jackfruit kottu", description: "Chopped roti, young jackfruit, curry leaf.", tags: ["VG"] },
      ],
    },
    {
      title: "Something sweet",
      items: [
        { name: "Watalappan", description: "Kithul and cardamom custard, cashew brittle.", tags: ["GF"] },
        { name: "Olive oil cake", description: "Lime syrup, buffalo curd, toasted coconut.", tags: ["V"] },
      ],
    },
  ] satisfies MenuGroup[],
};

/* --------------------------------- Drink --------------------------------- */

export const drink = {
  intro: {
    eyebrow: "Drink",
    title: "Cocktails with a Sri Lankan soul.",
    lede: "We take local ingredients and flavours and put them into drinks that are fun to discover and easy to enjoy. Pull up a seat at the bar, on your own or with the whole crew.",
    media: { src: photos.barDim, alt: "Bar counter with arrack bottles", tone: "dusk" },
  } satisfies PageIntro,
  journey: [
    { title: "Arrack", description: "The island’s own spirit, distilled from coconut palm sap. Smooth, a little floral and our favourite base." },
    { title: "Kithul", description: "Treacle from the fishtail palm. Smoky, rich and how we sweeten almost everything." },
    { title: "King coconut", description: "Thambili, straight from the shell. Bright, salty-sweet and made for the heat." },
    { title: "Spice & tea", description: "Cinnamon, curry leaf, ginger and high-grown Ceylon tea, brewed, infused or shaken." },
  ] satisfies Step[],
  menu: [
    {
      title: "Signatures",
      items: [
        { name: "Barefoot Sour", description: "Coconut arrack, lime, kithul, cinnamon." },
        { name: "Thambili Highball", description: "King coconut, arrack, ginger." },
        { name: "Curry Leaf Gimlet", description: "Gin, curry leaf cordial, lime." },
        { name: "Kithul Old Fashioned", description: "Aged arrack, kithul, coconut bitters." },
        { name: "Ceylon Spritz", description: "Cold-brew tea, citrus, sparkling wine." },
      ],
    },
    {
      title: "Zero proof",
      items: [
        { name: "Ginger & Lime Fizz", description: "House ginger beer, curry leaf, soda." },
        { name: "Fresh thambili", description: "King coconut, straight from the shell." },
        { name: "Iced Ceylon", description: "Single-estate tea, lemongrass, honey." },
      ],
    },
  ] satisfies MenuGroup[],
};

/* ---------------------------------- Stay --------------------------------- */

export const stay = {
  intro: {
    eyebrow: "Stay",
    title: "A laid-back base in Weligama.",
    lede: "Private rooms and shared hostel beds, a short walk from the bay. Somewhere to unwind between beach days, and to meet the people you’ll be surfing with tomorrow.",
    media: { src: photos.roomWhite, alt: "Bright room with linen and timber", tone: "ocean" },
  } satisfies PageIntro,
  rooms: [
    {
      name: "Private Room",
      sleeps: "Private",
      description: "Your own room to unwind in after a day by the ocean, with the bar and kitchen just downstairs.",
      media: { src: photos.roomGreenery, alt: "Private room opening onto greenery", tone: "palm" },
    },
    {
      name: "Hostel Bed",
      sleeps: "Shared",
      description: "A bed in a shared room. The easy way to meet people between beach days.",
      media: { src: photos.roomFan, alt: "Shared hostel room with bunks", tone: "sand" },
    },
  ] satisfies Room[],
  howToStay: {
    title: "Book your stay",
    body: "Private rooms and hostel beds are booked through our Booking.com page. Got a question first? Message us on WhatsApp or email.",
  },
};

/* ---------------------------------- Surf --------------------------------- */

export const surf = {
  intro: {
    eyebrow: "Surf",
    title: "Lessons for every level.",
    lede: "Weligama Bay is one of the friendliest places on the island to learn. Whether it’s your first time on a board or you’re getting more comfortable in the water, surf lessons are part of the Barefoot experience.",
    media: { src: photos.surfers, alt: "Surfers in the water at Weligama", tone: "ocean" },
  } satisfies PageIntro,
  levels: [
    { title: "First time on a board", description: "Never surfed before? Start here. Weligama Bay’s gentle waves are a great place to learn." },
    { title: "Getting more comfortable", description: "Had a few sessions already? Keep building your confidence in the water." },
  ] satisfies Step[],
  enquiry: {
    title: "Want to know more?",
    body: "Questions about lessons, levels or timings? Message us on WhatsApp or email and we’ll fill you in.",
  },
};

/* ---------------------------------- Visit -------------------------------- */

export const visit = {
  intro: {
    eyebrow: "Visit",
    title: "Find us in Weligama.",
    lede: "On the south coast, a short walk from the bay. Come straight from the beach, sandy feet welcome.",
    media: { src: photos.stiltPoles, alt: "Weligama Bay from the road", tone: "ocean" },
  } satisfies PageIntro,
  faqs: [
    { question: "How do I book a room?", answer: "Private rooms and hostel beds are booked through our Booking.com page. We can’t take bookings over WhatsApp or email, but we’re happy to answer questions there." },
    { question: "Do I need to stay with you to eat or drink?", answer: "Not at all. Come straight from the beach for lunch, or pull up a seat at the bar." },
    { question: "I’ve never surfed. Can I still take a lesson?", answer: "Yes. Lessons are for first-timers as well as people getting more comfortable in the water." },
  ] satisfies Faq[],
};
