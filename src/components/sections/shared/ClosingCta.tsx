import { LocalClock } from "@/components/layout/LocalClock";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";
import { closing } from "@/content/home";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/utils";

/** One closing card per page: an invitation on the left, the practical details on the right. */
export function ClosingCta({ title = closing.title, body = closing.body }: { title?: string; body?: string }) {
  return (
    <section className="px-3 md:px-6">
      <div className="rounded-[var(--radius-card)] bg-sand py-20 md:py-28">
        <Container className="grid gap-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SplitText as="h2" text={title} className="block text-headline uppercase" />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-mute">{body}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href={site.bookingUrl}>Book now</Button>
                <Button href={whatsappLink("Hi Barefoot Social! I have a question.")} variant="outline">WhatsApp</Button>
                <Button href={`mailto:${site.contact.email}`} variant="outline">Email</Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="md:col-span-4 md:col-start-9">
            <dl className="divide-y divide-line border-y border-line text-sm">
              <div className="flex justify-between gap-6 py-4">
                <dt className="shrink-0 text-mute">Find us</dt>
                <dd className="text-right">
                  <a href={site.address.mapsUrl} target="_blank" rel="noreferrer" className="link-underline">
                    {site.address.lines.slice(0, 2).join(", ")}
                  </a>
                </dd>
              </div>
              {site.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-6 py-4">
                  <dt className="shrink-0 text-mute">{h.label}</dt>
                  <dd>{h.value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-6 py-4">
                <dt className="flex shrink-0 items-center gap-2 text-mute">
                  <span className="size-1.5 animate-pulse rounded-full bg-current" aria-hidden />
                  Weligama now
                </dt>
                <dd><LocalClock /></dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
