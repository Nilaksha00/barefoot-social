import type { Metadata } from "next";
import { Banner } from "@/components/sections/shared/Banner";
import { Section, StepGrid } from "@/components/sections/shared/Blocks";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Editorial } from "@/components/sections/shared/Editorial";
import { HoursList } from "@/components/sections/shared/Location";
import { MenuPanel } from "@/components/sections/shared/MenuPanel";
import { PageIntro } from "@/components/sections/shared/PageIntro";
import { ShowcaseGrid } from "@/components/sections/shared/ShowcaseGrid";
import { Gallery } from "@/components/ui/Gallery";
import { drink } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Drink",
  description:
    "Cocktails with a Sri Lankan soul at the Barefoot Social bar in Weligama. Local ingredients and familiar flavours, easy to enjoy.",
};

export default function DrinkPage() {
  return (
    <>
      <PageIntro intro={drink.intro} />

      <Editorial copy={drink.introduction.copy} main={drink.introduction.media} reverse />

      <Section eyebrow="Sri Lankan flavours" title="Local ingredients, familiar tastes" surface="sand">
        <StepGrid steps={drink.flavours} columns={4} />
      </Section>

      <Section eyebrow="Signature cocktails" title="Behind the bar">
        <ShowcaseGrid items={drink.signatureCocktails} columns={3} />
      </Section>

      <Banner {...drink.experience} align="right" />

      <Section eyebrow="Gallery" title="Pour, shake, share">
        <Gallery shots={drink.gallery} />
      </Section>

      <MenuPanel
        eyebrow="Menu"
        title="The drinks menu"
        groups={drink.menu}
        downloadUrl={site.menus.drinks}
        downloadLabel="Download the drinks menu"
        emptyNote="Our full drinks menu will be published here soon, ready to read online or download."
      />

      <Section eyebrow="Opening hours" title="When we're open" surface="sand">
        <div className="max-w-xl">
          <HoursList />
        </div>
      </Section>

      <ClosingCta
        {...drink.cta}
        primary={{ label: "Find Us", href: "/find-us" }}
        secondary={{ label: "Contact Us", href: "/find-us#enquire" }}
      />
    </>
  );
}
