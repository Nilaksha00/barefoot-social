import type { Metadata } from "next";
import { Section } from "@/components/sections/shared/Blocks";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Editorial } from "@/components/sections/shared/Editorial";
import { ImageTiles } from "@/components/sections/shared/ImageTiles";
import { MenuPanel } from "@/components/sections/shared/MenuPanel";
import { PageIntro } from "@/components/sections/shared/PageIntro";
import { ShowcaseGrid } from "@/components/sections/shared/ShowcaseGrid";
import { Gallery } from "@/components/ui/Gallery";
import { eat } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Eat",
  description:
    "Simple, generous food inspired by Sri Lankan and Mediterranean flavours at Barefoot Social in Weligama. Fresh seafood, local ingredients and relaxed breakfasts.",
};

export default function EatPage() {
  return (
    <>
      <PageIntro intro={eat.intro} />

      <Editorial copy={eat.philosophy.copy} main={eat.philosophy.media} />

      <Section eyebrow="Food highlights" title="What's on the table" surface="sand">
        <ImageTiles tiles={eat.highlights} columns={4} />
      </Section>

      <Section eyebrow="Signature dishes" title="From our kitchen">
        <ShowcaseGrid items={eat.signatureDishes} columns={4} />
      </Section>

      <Editorial copy={eat.breakfast.copy} main={eat.breakfast.media} reverse surface="sand" />

      <Section eyebrow="Gallery" title="A taste of Barefoot">
        <Gallery shots={eat.gallery} />
      </Section>

      <MenuPanel
        eyebrow="Menu"
        title="The food menu"
        groups={eat.menu}
        downloadUrl={site.menus.food}
        downloadLabel="Download the menu"
        emptyNote="Our full food menu will be published here soon, ready to read online or download."
      />

      <ClosingCta
        {...eat.cta}
        primary={{ label: "Find Us", href: "/find-us" }}
        secondary={{ label: "Contact Us", href: "/find-us#enquire" }}
      />
    </>
  );
}
