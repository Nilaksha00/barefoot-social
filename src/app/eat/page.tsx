import type { Metadata } from "next";
import { MenuList, Section } from "@/components/sections/shared/Blocks";
import { PageIntro } from "@/components/sections/shared/PageIntro";
import { eat } from "@/content/pages";

export const metadata: Metadata = {
  title: "Eat",
  description: eat.intro.lede,
};

export default function EatPage() {
  return (
    <>
      <PageIntro intro={eat.intro} />
      <Section
        eyebrow="Sample menu"
        title="From first surf to last round"
        aside={<p className="max-w-xs text-base text-mute">Menus change with the season and the catch. V vegetarian · VG vegan · GF gluten-free.</p>}
      >
        <MenuList groups={eat.menu} />
      </Section>
    </>
  );
}
