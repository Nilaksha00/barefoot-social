import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import type { EditorialCopy, MediaRef } from "@/types/content";
import { cn } from "@/lib/utils";

type EditorialProps = {
  copy: EditorialCopy;
  /** The large photograph, about 58% of the width on desktop. */
  main?: MediaRef;
  /** Smaller supporting photographs, set as a staggered row under the text. */
  extras?: MediaRef[];
  /** Put the large photograph on the right and the text on the left. */
  reverse?: boolean;
  /** Light grey band behind the section. */
  surface?: "plain" | "sand";
  /** Aspect ratio of the large photograph. */
  ratio?: string;
  /** Extra content under the paragraphs, in place of the call to action. */
  children?: ReactNode;
  id?: string;
  className?: string;
};

/**
 * The site's workhorse editorial layout: text beside one large photograph,
 * with an optional staggered row of smaller photos. It stacks on mobile
 * (text first), and `reverse` flips the sides so neighbouring sections
 * alternate.
 */
export function Editorial({
  copy,
  main,
  extras = [],
  reverse,
  surface = "plain",
  ratio = "aspect-[4/5]",
  children,
  id,
  className,
}: EditorialProps) {
  const hasPhoto = Boolean(main);
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 md:py-32", surface === "sand" && "bg-sand", className)}>
      <Container className="grid items-center gap-10 md:grid-cols-12 md:gap-x-10 lg:gap-x-16">
        <div
          className={cn(
            "md:row-start-1",
            hasPhoto ? "md:col-span-5" : "md:col-span-8 md:col-start-3",
            hasPhoto && (reverse ? "md:col-start-1" : "md:col-start-8"),
          )}
        >
          <Reveal>
            {copy.eyebrow && <Eyebrow>{copy.eyebrow}</Eyebrow>}
            <h2 className="mt-4 text-heading uppercase">{copy.title}</h2>
            <div className="mt-6 max-w-[48ch] space-y-4 text-lg leading-relaxed text-ink-soft">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {copy.cta && (
              <div className="mt-8">
                <Button href={copy.cta.href}>{copy.cta.label}</Button>
              </div>
            )}
            {children && <div className="mt-8">{children}</div>}
          </Reveal>

          {extras.length > 0 && (
            <ul
              className={cn(
                "mt-10 grid gap-3",
                extras.length === 2 && "grid-cols-2",
                extras.length >= 3 && "grid-cols-3",
              )}
            >
              {extras.map((extra, i) => (
                <li key={extra.alt} className={cn(i % 2 === 1 && "mt-6 md:mt-10")}>
                  <Photo
                    media={extra}
                    label={false}
                    reveal
                    delay={0.15 + i * 0.1}
                    sizes="(min-width: 1024px) 15vw, 30vw"
                    className="aspect-[3/4]"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        {main && (
          <div className={cn("md:col-span-7 md:row-start-1", reverse ? "md:col-start-6" : "md:col-start-1")}>
            <Photo
              media={main}
              reveal
              sizes="(min-width: 1440px) 800px, (min-width: 768px) 58vw, 100vw"
              className={ratio}
            />
          </div>
        )}
      </Container>
    </section>
  );
}
