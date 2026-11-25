import type { Metadata } from "next";
import { Section, StepGrid } from "@/components/sections/shared/Blocks";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { Collage } from "@/components/sections/shared/Collage";
import { ImageTiles } from "@/components/sections/shared/ImageTiles";
import { PageIntro } from "@/components/sections/shared/PageIntro";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { story } from "@/content/pages";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Barefoot Social is a social house in Weligama where locals, surfers and travellers can all feel at home. Eat, drink, stay and connect.",
};

export default function OurStoryPage() {
  const [lead, ...rest] = story.paragraphs;

  return (
    <>
      <PageIntro intro={story.intro} />

      {/* The story, set as an editorial spread: a heading in the margin, the words beside it. */}
      <section className="py-28 md:py-32">
        <Container className="grid gap-10 md:grid-cols-12 md:gap-x-10 lg:gap-x-16">
          <Reveal className="md:col-span-4">
            <Eyebrow>The story</Eyebrow>
            <h2 className="mt-4 text-heading uppercase">Somewhere to feel at home.</h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
            <p className="text-lede text-ink">{lead}</p>
            <div className="mt-8 max-w-[56ch] space-y-5 text-lg leading-relaxed text-ink-soft">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <Section eyebrow="Our philosophy" title="Eat. Drink. Stay. Connect." surface="sand">
        <StepGrid steps={story.philosophy} columns={4} />
      </Section>

      <section className="py-28 md:py-32">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>{story.community.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-heading uppercase">{story.community.title}</h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-soft">{story.community.body}</p>
          </Reveal>
          <ImageTiles tiles={story.community.tiles} columns={3} className="mt-12 md:mt-16" />
        </Container>
      </section>

      <Section eyebrow={story.experience.eyebrow} title={story.experience.title} surface="sand">
        <Collage shots={story.experience.shots} />
      </Section>

      <ClosingCta {...story.cta} secondary={{ label: "Find Us", href: "/find-us" }} />
    </>
  );
}
