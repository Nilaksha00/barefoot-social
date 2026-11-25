import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { InstagramGrid } from "@/components/sections/home/InstagramGrid";
import { Intro } from "@/components/sections/home/Intro";
import { Banner } from "@/components/sections/shared/Banner";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Collage } from "@/components/sections/shared/Collage";
import { Editorial } from "@/components/sections/shared/Editorial";
import { LocationSection } from "@/components/sections/shared/Location";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { barPreview, foodPreview, location, social, stayPreview, surfPreview } from "@/content/home";
import { stay } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} · Eat, Drink, Stay, Connect in Weligama` },
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />

      {/* Food on the left photo, bar on the right photo, so the two previews alternate. */}
      <Editorial copy={foodPreview.copy} main={foodPreview.main} extras={foodPreview.extras} />
      <Editorial copy={barPreview.copy} main={barPreview.main} extras={barPreview.extras} reverse surface="sand" />

      {/* Stay follows the same pattern as Eat and Drink: one large photo and smaller ones, photos only. */}
      <Editorial
        copy={{ eyebrow: stayPreview.eyebrow, title: stayPreview.title, paragraphs: [stayPreview.body], cta: stayPreview.cta }}
        main={stay.rooms[0].media}
        extras={stay.rooms.slice(1).map((room) => room.media)}
      />

      <Banner {...surfPreview} />

      <section className="py-28 md:py-32">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>{social.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-heading uppercase">{social.title}</h2>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft">{social.body}</p>
          </Reveal>
          <div className="mt-14 md:mt-16">
            <Collage shots={social.shots} />
          </div>
        </Container>
      </section>

      <InstagramGrid />
      <LocationSection {...location} id="find-us" />
      <ClosingCta />
    </>
  );
}
