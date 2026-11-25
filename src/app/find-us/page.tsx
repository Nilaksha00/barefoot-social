import type { Metadata } from "next";
import { Section } from "@/components/sections/shared/Blocks";
import { EnquiryForm } from "@/components/sections/shared/EnquiryForm";
import { FaqList } from "@/components/sections/shared/FaqList";
import { ContactList, HoursList, LocationSection } from "@/components/sections/shared/Location";
import { PageIntro } from "@/components/sections/shared/PageIntro";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { findUs } from "@/content/pages";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find Barefoot Social in Weligama, Sri Lanka. Contact details, map, opening hours and an enquiry form for rooms, food, the bar and surf lessons.",
};

export default function FindUsPage() {
  return (
    <>
      <PageIntro intro={findUs.intro} />

      <Section eyebrow="Contact" title="Say hello">
        <div className="max-w-2xl">
          <ContactList />
        </div>
      </Section>

      <LocationSection
        compact
        eyebrow="Location"
        title="Find us in Weligama."
        body="Barefoot Social is located in Weligama, Sri Lanka."
      />

      <section id="enquire" className="scroll-mt-24 bg-sand py-28 md:py-32">
        <Container className="grid gap-12 md:grid-cols-12 md:gap-x-10 lg:gap-x-16">
          <Reveal className="md:col-span-4">
            <Eyebrow>Enquiry</Eyebrow>
            <h2 className="mt-4 text-heading uppercase">Send us a message</h2>
            <p className="mt-6 max-w-[36ch] text-lg leading-relaxed text-ink-soft">
              Pick what it&rsquo;s about, tell us a little and we&rsquo;ll get back to you.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <EnquiryForm />
          </Reveal>
        </Container>
      </section>

      <Section eyebrow="Opening hours" title="When to visit">
        <div className="max-w-xl">
          <HoursList />
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Visiting and staying" surface="sand">
        <FaqList faqs={findUs.faqs} />
      </Section>
    </>
  );
}
