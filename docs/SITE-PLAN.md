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
/            Home
/eat         Eat (sample menu)
/drink       Drink (beverage culture and the bar)
/stay        Stay (private rooms, hostel beds and a Book on Booking.com card)
/surf        Surf (lessons for every level, questions via WhatsApp or email)
/visit       Visit (address, hours, map, FAQ)
```

The navigation mirrors the brand line (Eat • Drink • Stay • Connect) plus Surf and Visit. There is no Connect page: Connect stays in the brand line and the tone, since no events programme or private events are offered. Surf is part of the Barefoot experience, so it also appears in the home pillar index. The story lives in the home page intro.

## Page-by-page sections

### Home (`/`), 4 sections
1. **Hero**: the launch poster brought to life. The logo draws itself, the wordmark settles, and "Weligama, we're almost home." rises word by word above drifting line waves.
2. **Your Social House**: the bay photo sits beside the story. As you scroll, it opens from a small frame to full size, zooms out and drifts, and the copy lights up word by word.
3. **Pillar index**: EAT / DRINK / STAY / SURF as oversized type rows. Hovering dims the others; on mobile a thumbnail shows inline.
4. **Closing card**: Book now (Booking.com), plus WhatsApp and Email for questions, beside the address, hours and live Weligama time.

### Eat
Page intro, the sample menu (Mornings / All day / Sweet, with dietary tags), then the closing card.

### Drink
Page intro, *From palm to glass* (Toddy → Arrack → Tea → Kithul), the sample drinks list, then the closing card.

### Stay
Page intro, the room cards, then **Book your stay**, which links to Booking.com, with WhatsApp and email for questions.

### Surf
Page intro, the two levels from the brief (first time on a board / getting more comfortable), then a questions card (WhatsApp and email).

### Visit
Page intro, the address, hours and contact beside a greyscale map, then the FAQ.

## Bookings
There is no booking engine on the site. `site.bookingUrl` in `src/content/site.ts` points to the property's Booking.com page.
The current value is a Booking.com search placeholder until the client shares their listing link.

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
