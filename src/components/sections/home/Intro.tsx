import { Container, Eyebrow } from "@/components/ui/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { intro } from "@/content/home";

/** Two-column introduction: the story on the left, one large lifestyle photograph on the right. */
export function Intro() {
  return (
    <section aria-labelledby="house-story" className="py-20 md:py-32">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
        <Reveal className="max-w-xl">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h2 id="house-story" className="mt-4 text-heading uppercase">
            {intro.title}
          </h2>
          <div className="mt-6 max-w-[48ch] space-y-4 text-lg leading-relaxed text-ink-soft lg:text-xl">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <ImageReveal radius="4px">
          <Media
            media={intro.media}
            label={false}
            sizes="(min-width: 1440px) 648px, (min-width: 768px) 46vw, 100vw"
            className="aspect-[4/3] md:aspect-[4/5]"
          />
        </ImageReveal>
      </Container>
    </section>
  );
}
