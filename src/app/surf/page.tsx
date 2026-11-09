import type { Metadata } from "next";
import { ActionSection, Section, StepGrid } from "@/components/sections/shared/Blocks";
import { PageIntro } from "@/components/sections/shared/PageIntro";
import { surf } from "@/content/pages";

export const metadata: Metadata = {
  title: "Surf",
  description: surf.intro.lede,
};

export default function SurfPage() {
  return (
    <>
      <PageIntro intro={surf.intro} />
      <Section eyebrow="Your level" title="Wherever you are on the board">
        <StepGrid steps={surf.levels} columns={2} />
      </Section>
      <ActionSection eyebrow="Surf lessons" title={surf.enquiry.title} body={surf.enquiry.body} />
    </>
  );
}
