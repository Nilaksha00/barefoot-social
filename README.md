# Barefoot Social

Marketing site for Barefoot Social, a social house in Weligama, Sri Lanka.
Eat • Drink • Stay • Connect. Rooms and hostel beds are booked on Booking.com only (`site.bookingUrl`). The website only collects **enquiries** (it never confirms a booking).

The pages, sections and content still needed from the client are in [docs/SITE-PLAN.md](docs/SITE-PLAN.md).

## Stack

- **Next.js 16** (App Router, Turbopack, every route static)
- **React 19** and **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **Motion** (`motion/react`) for reveals, scroll-linked and hover animation
- **Lenis** for smooth scrolling (switched off for `prefers-reduced-motion`)

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Structure

```
src/
├─ app/                     Routes: one folder per page
│  ├─ layout.tsx            Fonts, metadata, header/footer, providers
│  ├─ page.tsx              Home (12 sections)
│  ├─ eat | drink | stay | surf | our-story | find-us | privacy/
│  ├─ sitemap.ts, robots.ts, not-found.tsx
│  └─ globals.css           Design tokens (colour, type scale, easing)
├─ components/
│  ├─ layout/               Header, Footer, Providers (Lenis + MotionConfig), LocalClock
│  ├─ sections/
│  │  ├─ home/              Hero, Intro, Pillars, InstagramGrid
│  │  └─ shared/            PageIntro, Editorial, ImageTiles, ShowcaseGrid, Banner, Collage,
│  │                        RoomCards, MenuPanel, Location, EnquiryForm, FaqList, ClosingCta, Blocks
│  └─ ui/                   Primitives: Button, Photo, Media, Gallery (lightbox), Placeholder, Logo, Reveal…
├─ content/                 All copy and data (site settings, home, pages, photos)
├─ lib/                     cn(), contact link helpers, enquiry server action, motion tokens
└─ types/content.ts         Content model, ready for a CMS
```

**Rule of thumb:** components never hard-code copy. To change text, edit `src/content/*`.
To move to a CMS later, swap those files for fetches that return the same types.

## Placeholders, not inventions

Nothing about the business is made up. Whatever the client hasn't supplied is `null`, empty or a labelled
placeholder, and the UI shows a "To be confirmed" / "Coming soon" tag instead. Filling the value in switches
the real thing on automatically:

| To supply | Where | What switches on |
| --- | --- | --- |
| WhatsApp, phone, email, Instagram | `site.contact` in `src/content/site.ts` | Header/footer/contact links, Instagram follow button |
| Street address and map pin | `site.address` (set `confirmed: true`, swap `embedUrl`) | Address, Google Maps embed, directions |
| Opening hours | `site.hours` | Drink and Find Us pages |
| Menus | `site.menus.food` / `.drinks` (PDF in `public/menus/`) and/or `eat.menu` / `drink.menu` in `src/content/pages.ts` | Menu sections |
| Signature dishes and cocktails | `eat.signatureDishes`, `drink.signatureCocktails` | Cards (names, descriptions, optional `price`) |
| Room capacity, price, amenities | `stay.rooms[].details` | Stay page room blocks |
| Check-in/out, cancellation | `stay.bookingFacts` | Stay page |
| Surf duration, price, lesson types | `surf.lessonInfo`, `surf.expect` | Surf page |

Search for `<Tbc` and `TODO(client)` to find everything still waiting on content.

## Enquiry forms

The Find Us form and the surf lesson form share one server action (`src/lib/enquiry.ts`). They validate on the
client and again on the server, include a honeypot, and say clearly that an enquiry is not a booking.

Set `ENQUIRY_WEBHOOK_URL` (e.g. a Formspree, Make or Zapier endpoint, or the client's own) to have enquiries
delivered as JSON. Without it, production shows an honest "enquiries aren't switched on yet" message, and
development just logs the enquiry to the server console.

## Common tasks

- **Add real photos:** the draft uses free Unsplash stand-ins, grouped by category in `src/content/photos.ts`. Put the client's photos in `public/images/` (e.g. `eat/`, `drink/`, `stay/`, `surf/`) and point each entry at them, e.g. `"/images/eat/seafood.jpg"`. Every page reads from that one file. After that, remove `remotePatterns` from `next.config.ts`.
- **Hero video:** the home hero loops a sample Mixkit clip (free for commercial use). To use the client's footage, put it in `public/videos/` and point `hero.video` in `src/content/home.ts` at it (`src`, a lighter `srcMobile`, and a `poster` still).
- **Hero copy:** `hero` in `src/content/home.ts`.
- **Booking link:** `bookingUrl` in `src/content/site.ts` (currently a Booking.com search for the property; swap in its own page). Every "Book Your Stay" button uses it.
- **Old links:** `/visit` redirects to `/find-us` (see `next.config.ts`).
- **Logo:** replace the paths in `src/components/ui/Logo.tsx` with the official SVG. Keep them as strokes if you want the draw-in animation.
