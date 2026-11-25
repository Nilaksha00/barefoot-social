# Barefoot Social: site plan

A marketing site for a social house (bar, kitchen and rooms) in Weligama, Sri Lanka.
**Bookings happen on Booking.com only.** The header's "Book now" button and every booking call to action
link to the property's Booking.com page. WhatsApp and email are for questions, never reservations.

## Brand read (from the supplied assets)

| Signal | What it tells us | How the site uses it |
| --- | --- | --- |
| Black & white palm + surfer mark | Coastal, relaxed, graphic | Monochrome base with a line-drawn logo that draws itself in the hero |
| Wide-tracked geometric caps ("B A R E F O O T") | Calm, premium, minimal | Jost, tracked eyebrow labels, oversized uppercase headlines |
| "Weligama, we're almost home. Stay tuned." | Pre-opening teaser | Hero copy, with the brand line (Eat • Drink • Stay • Connect) beneath it |
| "Eat • Drink • Stay • Connect" | Four pillars | The site's information architecture |
| "Your social house…" copy | Warm, people-first voice | Used word for word on Home |

**Visual direction (client brief):** clean black and white, warm photography, an easygoing tone. The palette is pure white paper, a light grey card surface (`#f2f2f0`) and near-black ink, with no colour accent. All the warmth comes from the photos. Type is Jost in wide-tracked caps, with Instrument Serif italic for warm touches.
with ink, plus a single sunset accent (`#c8693f`) used only for small dots. Type is Jost in wide-tracked caps, with Instrument Serif italic for warm touches.

**Kept deliberately simple:** each page has at most four sections, and each section carries one idea.
The signature moments are the self-drawing logo, the bay photo opening up beside the story, the scroll-lit copy and the oversized pillar index.
The photos are free Unsplash samples (listed in `src/content/photos.ts`) and will be replaced with the client's own shoot.

## Sitemap

```
/            Home (hero, intro, food, bar, rooms, surf, social collage, Instagram, location, closing CTA)
/eat         Eat (philosophy, highlights, signature dishes, breakfast, gallery + lightbox, menu)
/drink       Drink (introduction, Sri Lankan flavours, signature cocktails, bar experience, gallery, menu, hours)
/stay        Stay (Private Room 01, Private Room 02, Shared Hostel Room, facilities, booking info, FAQs)
/surf        Surf (lessons, what to expect, gallery, lesson info, FAQs, lesson enquiry form)
/our-story   Our Story (the story, philosophy, community, experience collage, location)
/find-us     Find Us (contact, map, enquiry form with enquiry types, hours, FAQs)
/privacy     Privacy policy (placeholder until the full policy is supplied)
/visit       Redirects to /find-us
```

The navigation is Home, Eat, Drink, Stay, Surf, Our Story and Find Us, plus a prominent Book Your Stay button. The header stays pinned on every page.

## Bookings
There is no booking engine on the site. `site.bookingUrl` in `src/content/site.ts` points to the property's Booking.com page.
The current value is a Booking.com search placeholder until the client shares their listing link.

The only things the site itself collects are **enquiries** (Find Us form, surf lesson form). They are delivered through `ENQUIRY_WEBHOOK_URL` and never presented as a booking.

## Needed from the client
- [ ] Official logo as SVG (to replace `LogoMark` in `src/components/ui/Logo.tsx`)
- [ ] Photography: the bay, the four pillars, a private room, a hostel room, surf lessons, 5 page heroes
- [ ] Booking.com property link (for `site.bookingUrl`)
- [ ] How surf lessons are booked (currently questions only, via WhatsApp or email)
- [ ] WhatsApp number, email, Instagram handle, domain
- [ ] Exact address and Google Maps pin
- [ ] Opening hours, opening date (to update the hero copy)
- [ ] Real room types, menu highlights and drinks list
- [ ] Surf lesson details: prices, group sizes, times, coaches
- [ ] Real room types and dorm sizes (the site currently shows only Private Room and Hostel Bed, with no amenities listed)

## Nice-to-haves after launch
- A headless CMS (Sanity or Payload) behind the `src/content` layer so the team can edit menus and events
- JSON-LD (`Hotel`, `BarOrPub`, `Restaurant`) for local search
- Sinhala and Tamil translations through `next-intl`
- An OG image generated with `opengraph-image.tsx`
