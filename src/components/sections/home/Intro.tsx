import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollText } from "@/components/ui/ScrollText";
import { SplitText } from "@/components/ui/SplitText";
import { intro } from "@/content/home";

/** The story: label and heading on the left, the copy on the right, lit word by word as you scroll. */
export function Intro() {
  return (
    <section className="py-28 md:py-44">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>{intro.eyebrow}</Eyebrow>
          </Reveal>
          <SplitText as="h2" text={intro.title} className="mt-5 block text-headline uppercase md:mt-6" />
        </div>

        <div className="space-y-8 md:col-span-6 md:col-start-7 md:space-y-10 md:pt-10">
          {intro.paragraphs.map((p) => (
            <ScrollText key={p} text={p} className="text-lede md:text-[1.85rem] md:leading-[1.4]" />
          ))}
        </div>
      </Container>
    </section>
  );
}
