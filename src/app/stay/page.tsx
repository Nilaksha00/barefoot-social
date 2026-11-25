import type { Metadata } from "next";
import { Section, StepGrid } from "@/components/sections/shared/Blocks";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Editorial } from "@/components/sections/shared/Editorial";
import { FaqList } from "@/components/sections/shared/FaqList";
import { PageIntro } from "@/components/sections/shared/PageIntro";
import { Button } from "@/components/ui/Button";
import { FactList, Tbc } from "@/components/ui/Placeholder";
import { stay } from "@/content/pages";
import { site } from "@/content/site";
import { indexLabel, slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Stay",
  description:
    "Two private rooms and a shared hostel room at Barefoot Social in Weligama: a laid-back base between beach days.",
};

export default function StayPage() {
  return (
    <>
      <PageIntro intro={stay.intro} />

      <Editorial copy={stay.introduction.copy} />

      {/* One editorial block per room. The photo alternates sides down the page. */}
      {stay.rooms.map((room, i) => (
        <Editorial
          key={room.name}
          id={slugify(room.name)}
          copy={{ eyebrow: `${room.kind} · ${indexLabel(i)}`, title: room.name, paragraphs: [room.description] }}
          main={room.media}
          ratio="aspect-[4/3]"
          reverse={i % 2 === 1}
          surface={i % 2 === 1 ? "sand" : "plain"}
        >
          <FactList facts={room.details} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.bookingUrl}>{site.bookLabel}</Button>
            <Button href="/find-us#enquire" variant="outline">
              Ask a Question
            </Button>
          </div>
        </Editorial>
      ))}

      <Section eyebrow="Facilities" title="Under one roof">
        <StepGrid steps={stay.facilities} columns={4} />
        <p className="mt-10 flex flex-wrap items-center gap-3 text-sm text-mute">
          <Tbc>Room amenities to be confirmed</Tbc>
          Only confirmed facilities are listed here.
        </p>
      </Section>

      <Section eyebrow="Booking information" title="Before you book" surface="sand">
        <div className="grid gap-10 md:grid-cols-12 md:gap-x-16">
          <div className="md:col-span-6">
            <FactList facts={stay.bookingFacts} />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-lg leading-relaxed text-ink-soft">
              Private rooms and hostel beds are booked on Booking.com. This website only collects enquiries and never confirms a booking. For
              anything else, send us a message.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.bookingUrl}>{site.bookLabel}</Button>
              <Button href="/find-us#enquire" variant="outline">
                Booking Enquiry
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Good to know">
        <FaqList faqs={stay.faqs} />
      </Section>

      <ClosingCta {...stay.cta} secondary={{ label: "Ask a Question", href: "/find-us#enquire" }} />
    </>
  );
}
