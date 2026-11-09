import type { Metadata } from "next";
import { ActionSection, Section } from "@/components/sections/shared/Blocks";
import { PageIntro } from "@/components/sections/shared/PageIntro";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { stay } from "@/content/pages";
import { site } from "@/content/site";
import { indexLabel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Stay",
  description: stay.intro.lede,
};

export default function StayPage() {
  return (
    <>
      <PageIntro intro={stay.intro} />

      <Section eyebrow="The rooms" title="Private rooms and hostel beds">
        <ul className="grid gap-12 md:grid-cols-2 md:gap-6">
          {stay.rooms.map((room, i) => (
            <li key={room.name} className="group">
              <ImageReveal delay={i * 0.12}>
                <Media
                  media={room.media}
                  label={false}
                  className="aspect-[4/3] transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </ImageReveal>
              <Reveal delay={0.25 + i * 0.12}>
                <div className="mt-6 flex items-baseline justify-between">
                  <h3 className="text-2xl uppercase">{room.name}</h3>
                  <span className="text-[11px] tracking-wide-plus text-mute">{indexLabel(i)}</span>
                </div>
                <p className="mt-1 text-[11px] uppercase tracking-wide-plus text-mute">{room.sleeps}</p>
                <p className="mt-4 text-sm text-ink-soft">{room.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <ActionSection
        id="book"
        eyebrow="Book"
        title={stay.howToStay.title}
        body={stay.howToStay.body}
        primary={{ label: "Book on Booking.com", href: site.bookingUrl }}
      />
    </>
  );
}
