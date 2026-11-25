import type { Metadata } from "next";
import { MenuList, Section, StepGrid } from "@/components/sections/shared/Blocks";
import { PageIntro } from "@/components/sections/shared/PageIntro";
import { drink } from "@/content/pages";

export const metadata: Metadata = {
  title: "Drink",
  description: drink.intro.lede,
};

export default function DrinkPage() {
  return (
    <>
      <PageIntro intro={drink.intro} />
      <Section eyebrow="Beverage culture" title="From palm to glass" surface="ink">
        <StepGrid steps={drink.journey} columns={4} />
      </Section>
      <Section eyebrow="Sample list" title="What we’re pouring">
        <MenuList groups={drink.menu} />
      </Section>
    </>
  );
}
