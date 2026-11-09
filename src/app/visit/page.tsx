import type { Metadata } from "next";
import { Section } from "@/components/sections/shared/Blocks";
import { FaqList } from "@/components/sections/shared/FaqList";
import { PageIntro } from "@/components/sections/shared/PageIntro";
import { VisitDetails } from "@/components/sections/shared/VisitDetails";
import { visit } from "@/content/pages";

export const metadata: Metadata = {
  title: "Visit",
  description: visit.intro.lede,
};

export default function VisitPage() {
  return (
    <>
      <PageIntro intro={visit.intro} />
      <VisitDetails />
      <Section eyebrow="Good to know" title="Questions, answered">
        <FaqList faqs={visit.faqs} />
      </Section>
    </>
  );
}
