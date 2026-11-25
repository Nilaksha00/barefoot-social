import type { Metadata } from "next";
import { Section, StepGrid } from "@/components/sections/shared/Blocks";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Editorial } from "@/components/sections/shared/Editorial";
import { EnquiryForm } from "@/components/sections/shared/EnquiryForm";
import { FaqList } from "@/components/sections/shared/FaqList";
import { ImageTiles } from "@/components/sections/shared/ImageTiles";
import { PageIntro } from "@/components/sections/shared/PageIntro";
import { Gallery } from "@/components/ui/Gallery";
import { FactList } from "@/components/ui/Placeholder";
import { surf } from "@/content/pages";

export const metadata: Metadata = {
  title: "Surf",
  description:
    "Surf lessons in Weligama for beginners and improving surfers, part of the Barefoot Social experience. Send a lesson enquiry.",
};

export default function SurfPage() {
  return (
    <>
      <PageIntro intro={surf.intro} />

      <Editorial copy={surf.introduction.copy} main={surf.introduction.media} reverse />

      <Section eyebrow="Surf lessons" title="Wherever you are on the board" surface="sand">
        <ImageTiles tiles={surf.lessons} columns={2} />
      </Section>

      <Section eyebrow="What to expect" title="Your time in the water">
        <StepGrid steps={surf.expect} columns={3} />
      </Section>

      <Section eyebrow="Gallery" title="Weligama, up close" surface="sand">
        <Gallery shots={surf.gallery} />
      </Section>

      <Section eyebrow="Lesson information" title="The details">
        <div className="max-w-2xl">
          <FactList facts={surf.lessonInfo} />
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Surf questions" surface="sand">
        <FaqList faqs={surf.faqs} />
      </Section>

      <ClosingCta id="enquire" {...surf.cta} eyebrow="Book a surf lesson">
        <EnquiryForm variant="surf" submitLabel="Send Lesson Enquiry" />
      </ClosingCta>
    </>
  );
}
