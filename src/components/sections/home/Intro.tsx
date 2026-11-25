import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { intro } from "@/content/home";

/** Two-column introduction: the title on the left, the story on the right. No photograph. */
export function Intro() {
  return (
    <section aria-labelledby="house-story" className="py-28 md:py-40">
      <Container className="grid gap-10 md:grid-cols-12 md:gap-x-10 lg:gap-x-16">
        <Reveal className="md:col-span-6">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h2 id="house-story" className="mt-4 text-heading uppercase">
            {intro.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5 md:col-start-8 md:pt-9">
          <div className="max-w-[48ch] space-y-4 text-lg leading-relaxed text-ink-soft lg:text-xl">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
