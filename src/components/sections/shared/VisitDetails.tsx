import { LocalClock } from "@/components/layout/LocalClock";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/utils";

/** Address, hours and contact beside a muted map. */
export function VisitDetails() {
  return (
    <section className="py-24 md:py-36">
      <Container className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <address className="text-lede not-italic">
            {site.address.lines.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </address>

          <dl className="mt-10 divide-y divide-line border-y border-line text-sm">
            {site.hours.map((h) => (
              <div key={h.label} className="flex justify-between gap-6 py-4">
                <dt className="text-mute">{h.label}</dt>
                <dd>{h.value}</dd>
              </div>
            ))}
            <div className="flex justify-between gap-6 py-4">
              <dt className="flex items-center gap-2 text-mute">
                <span className="size-1.5 animate-pulse rounded-full bg-current" aria-hidden />
                Weligama now
              </dt>
              <dd><LocalClock /></dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={site.address.mapsUrl}>Directions</Button>
            <Button href={whatsappLink("Hi Barefoot Social!")} variant="outline">WhatsApp</Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="overflow-hidden rounded-[var(--radius-card)] border border-line md:col-span-7 md:col-start-6">
          <iframe
            title={`Map showing ${site.name} in Weligama`}
            src={site.address.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[55svh] w-full grayscale contrast-[1.05] md:h-full md:min-h-[520px]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
