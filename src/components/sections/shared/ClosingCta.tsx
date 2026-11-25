import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";
import { closing } from "@/content/home";
import { site } from "@/content/site";
import type { MediaRef } from "@/types/content";

type Action = { label: string; href: string };

const defaultPrimary: Action = { label: site.bookLabel, href: site.bookingUrl };
const defaultSecondary: Action = { label: "Get In Touch", href: "/find-us#enquire" };

/**
 * The closing call to action on every page: a large atmospheric photograph
 * with a short invitation and up to two buttons. Pass `null` to drop a button.
 * Pass `children` (e.g. an enquiry form) to show it in a panel beside the text
 * instead of the buttons.
 */
export function ClosingCta({
  title = closing.title,
  body = closing.body,
  media = closing.media,
  primary = defaultPrimary,
  secondary = defaultSecondary,
  eyebrow,
  id,
  children,
}: {
  title?: string;
  body?: string;
  media?: MediaRef;
  primary?: Action | null;
  secondary?: Action | null;
  eyebrow?: string;
  id?: string;
  children?: ReactNode;
}) {
  const panel = Boolean(children);
  return (
    <section id={id} className="relative isolate scroll-mt-24 overflow-hidden bg-ink text-paper">
      <Photo media={media} label={false} square sizes="100vw" className="absolute inset-0 -z-10 size-full" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/55" />

      <Container
        className={
          panel
            ? "grid gap-12 py-24 md:grid-cols-12 md:items-center md:gap-x-10 md:py-32"
            : "flex min-h-[80svh] flex-col items-center justify-center py-28 text-center"
        }
      >
        <div className={panel ? "md:col-span-5" : "max-w-4xl"}>
          {eyebrow && (
            <Reveal className={panel ? "" : "flex justify-center"}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <SplitText as="h2" text={title} className="mt-4 block text-headline uppercase" />
          <Reveal delay={0.15}>
            <p className={panel ? "mt-6 max-w-[40ch] text-lg leading-relaxed text-paper/90" : "mx-auto mt-6 max-w-[48ch] text-lg leading-relaxed text-paper/90"}>
              {body}
            </p>
            {!panel && (primary || secondary) && (
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {primary && (
                  <Button href={primary.href} variant="light">
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button href={secondary.href} variant="outline-light">
                    {secondary.label}
                  </Button>
                )}
              </div>
            )}
          </Reveal>
        </div>

        {panel && (
          <Reveal delay={0.2} className="md:col-span-7">
            <div className="rounded-[var(--radius-card)] bg-cream p-6 text-ink-soft md:p-10">{children}</div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
