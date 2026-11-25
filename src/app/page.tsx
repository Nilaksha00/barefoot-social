import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { InstagramGrid } from "@/components/sections/home/InstagramGrid";
import { Intro } from "@/components/sections/home/Intro";
import { Pillars } from "@/components/sections/home/Pillars";
import { Banner } from "@/components/sections/shared/Banner";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Collage } from "@/components/sections/shared/Collage";
import { Editorial } from "@/components/sections/shared/Editorial";
import { LocationSection } from "@/components/sections/shared/Location";
import { RoomCards } from "@/components/sections/shared/RoomCards";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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
      <Pillars />

      {/* Food on the left photo, bar on the right photo, so the two previews alternate. */}
      <Editorial copy={foodPreview.copy} main={foodPreview.main} extras={foodPreview.extras} />
      <Editorial copy={barPreview.copy} main={barPreview.main} extras={barPreview.extras} reverse surface="sand" />

      <section className="py-28 md:py-32">
        <Container>
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>{stayPreview.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-heading uppercase">{stayPreview.title}</h2>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft">{stayPreview.body}</p>
            </div>
            <Button href={stayPreview.cta.href}>{stayPreview.cta.label}</Button>
          </Reveal>
          <div className="mt-14 md:mt-16">
            <RoomCards rooms={stay.rooms} />
          </div>
        </Container>
      </section>

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
