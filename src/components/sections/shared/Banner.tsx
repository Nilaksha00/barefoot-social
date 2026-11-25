import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import type { MediaRef } from "@/types/content";
import { cn } from "@/lib/utils";

/** A wide, immersive photograph with the text set over it. Used for surf and for the bar experience. */
export function Banner({
  eyebrow,
  title,
  body,
  cta,
  media,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
  media: MediaRef;
  align?: "left" | "right";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <Photo
        media={media}
        label={false}
        square
        sizes="100vw"
        className="absolute inset-0 -z-10 size-full"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/50" />
      <Container className={cn("flex min-h-[75svh] items-end py-16 md:items-center md:py-24", align === "right" && "md:justify-end")}>
        <Reveal className="max-w-xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-4 text-heading uppercase">{title}</h2>
          <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-paper/90">{body}</p>
          {cta && (
            <div className="mt-8">
              <Button href={cta.href} variant="light">
                {cta.label}
              </Button>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
