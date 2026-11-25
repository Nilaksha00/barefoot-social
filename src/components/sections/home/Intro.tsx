import { Container, Eyebrow } from "@/components/ui/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Media } from "@/components/ui/Media";
import { intro } from "@/content/home";
import { photos } from "@/content/photos";

export function Intro() {
  return (
    <section aria-labelledby="house-story" className="py-14 md:py-20">
      <Container className="grid items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-16">
        <div className="max-w-xl">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h2 id="house-story" className="mt-4 text-[clamp(2rem,3.1vw,3.25rem)] leading-tight uppercase">{intro.title}</h2>
          <div className="mt-5 max-w-[47ch] space-y-3 text-lg leading-relaxed text-ink-soft lg:text-xl">
            {intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <ImageReveal radius="12px">
          <Media
            media={{ src: photos.stiltPoles, alt: "Waves breaking around wooden fishing stilts off the beach", tone: "ocean" }}
            sizes="(min-width: 1440px) 648px, (min-width: 768px) 46vw, 95vw"
            className="aspect-[3/2] md:aspect-[4/3] lg:aspect-[3/2]"
          />
        </ImageReveal>
      </Container>
    </section>
  );
}
