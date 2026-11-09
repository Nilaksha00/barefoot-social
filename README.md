# Barefoot Social

Marketing site for Barefoot Social, a social house in Weligama, Sri Lanka.
Eat • Drink • Stay • Connect. Rooms and hostel beds are booked on Booking.com only (`site.bookingUrl`). WhatsApp and email are for questions, not reservations.

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
│  ├─ template.tsx          Route cross-fade
│  ├─ page.tsx              Home
│  ├─ eat | drink | stay | surf | visit/
│  ├─ sitemap.ts, robots.ts, not-found.tsx
│  └─ globals.css           Design tokens (colour, type scale, easing)
├─ components/
│  ├─ layout/               Header, Footer, Providers (Lenis + MotionConfig), LocalClock
│  ├─ sections/
│  │  ├─ home/              Hero, Intro (photo beside the story), Pillars (the type index)
│  │  └─ shared/            PageIntro, Blocks (Section, StepGrid, MenuList, ActionSection), FaqList, VisitDetails, ClosingCta
│  └─ ui/                   Primitives: Button, Media, Logo, Reveal, SplitText, ScrollText
├─ content/                 All copy and data (site settings, home, pages, sample photos)
├─ lib/                     cn(), whatsappLink(), motion tokens
└─ types/content.ts         Content model, ready for a CMS
```

**Rule of thumb:** components never hard-code copy. To change text, edit `src/content/*`.
To move to a CMS later, swap those files for fetches that return the same types.

## Common tasks

- **Add real photos:** the draft uses free Unsplash samples listed in `src/content/photos.ts`. Put the client's photos in `public/images/` and point each entry at them (e.g. `"/images/hero-bay.jpg"`). After that, remove `remotePatterns` from `next.config.ts`.
- **Hero video:** the home hero loops a sample Mixkit clip (free for commercial use). To use the client's footage, put it in `public/videos/` and point `hero.video` in `src/content/home.ts` at it (`src`, a lighter `srcMobile`, and a `poster` still).
- **Launch day:** update the hero copy ("Weligama, we’re almost home.") in `src/content/home.ts`.
- **Contact details and booking link:** everything marked `PLACEHOLDER` in `src/content/site.ts`, including `bookingUrl` (the property's Booking.com page).
- **Logo:** replace the paths in `src/components/ui/Logo.tsx` with the official SVG. Keep them as strokes if you want the draw-in animation.
