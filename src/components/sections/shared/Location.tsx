import { LocalClock } from "@/components/layout/LocalClock";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Tbc } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { emailLink, phoneLink, whatsappLink } from "@/lib/utils";
import { cn } from "@/lib/utils";

const COMING_SOON = "Coming soon";

/** One labelled row; renders a placeholder when there is nothing to show yet. */
function Row({ label, children }: { label: string; children: React.ReactNode | null }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-4">
      <dt className="shrink-0 text-mute">{label}</dt>
      <dd className="text-right">{children ?? <Tbc>{COMING_SOON}</Tbc>}</dd>
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="link-underline">
      {children}
    </a>
  );
}

/** Phone, WhatsApp, email, address and Instagram. Each shows "Coming soon" until the client supplies it. */
export function ContactList({ className }: { className?: string }) {
  const { contact, address } = site;
  const phone = phoneLink();
  const whatsapp = whatsappLink("Hi Barefoot Social!");
  const email = emailLink();

  return (
    <dl className={cn("divide-y divide-line border-y border-line text-sm", className)}>
      <Row label="Phone">{phone && contact.phoneDisplay ? <ExternalLink href={phone}>{contact.phoneDisplay}</ExternalLink> : null}</Row>
      <Row label="WhatsApp">{whatsapp ? <ExternalLink href={whatsapp}>Message us on WhatsApp</ExternalLink> : null}</Row>
      <Row label="Email">{email && contact.email ? <ExternalLink href={email}>{contact.email}</ExternalLink> : null}</Row>
      <Row label="Address">
        <address className="not-italic">
          {address.lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          {!address.confirmed && (
            <span className="mt-2 block">
              <Tbc>Exact address coming soon</Tbc>
            </span>
          )}
        </address>
      </Row>
      <Row label="Instagram">
        {contact.instagram && contact.instagramHandle ? <ExternalLink href={contact.instagram}>{contact.instagramHandle}</ExternalLink> : null}
      </Row>
    </dl>
  );
}

/** Restaurant and bar hours, with a placeholder per row until confirmed. */
export function HoursList({ className, clock = true }: { className?: string; clock?: boolean }) {
  return (
    <dl className={cn("divide-y divide-line border-y border-line text-sm", className)}>
      {site.hours.map((hours) => (
        <div key={hours.label} className="flex items-center justify-between gap-6 py-4">
          <dt className="text-mute">{hours.label}</dt>
          <dd>{hours.value ?? <Tbc>Hours to be confirmed</Tbc>}</dd>
        </div>
      ))}
      {clock && (
        <div className="flex items-center justify-between gap-6 py-4">
          <dt className="flex items-center gap-2 text-mute">
            <span className="size-1.5 animate-pulse rounded-full bg-current" aria-hidden />
            Weligama now
          </dt>
          <dd>
            <LocalClock />
          </dd>
        </div>
      )}
    </dl>
  );
}

/** Google Maps embed. Shows Weligama Bay until the exact pin is set in `site.address.embedUrl`. */
export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-card)] border border-line", className)}>
      <iframe
        title={`Map showing ${site.name} in Weligama`}
        src={site.address.embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[55svh] min-h-[320px] w-full grayscale contrast-[1.05] md:h-full md:min-h-[480px]"
      />
    </div>
  );
}

/** Address plus a note that step-by-step directions will follow the exact pin. */
function AddressBlock() {
  return (
    <div className="space-y-4 border-y border-line py-6 text-sm">
      <address className="text-lede not-italic text-ink">
        {site.address.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
      {!site.address.confirmed && <Tbc>Exact address coming soon</Tbc>}
      <p className="max-w-[40ch] text-mute">
        Open the map for directions from wherever you are. We&rsquo;ll add the exact pin and a few landmarks to help you find us.
      </p>
    </div>
  );
}

/** Heading, then a map beside the address, contact details and directions. */
export function LocationSection({
  eyebrow = "Visit",
  title,
  body,
  id,
  compact,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  id?: string;
  /** Show just the address and directions. For pages that already list the full contact details. */
  compact?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-32">
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-heading uppercase">{title}</h2>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft">{body}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-x-10 lg:gap-x-16">
          <Reveal delay={0.1} className="md:col-span-7">
            <MapEmbed className="h-full" />
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-5">
            {compact ? (
              <AddressBlock />
            ) : (
              <ContactList />
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.address.mapsUrl}>Get Directions</Button>
              {!compact && (
                <Button href="/find-us" variant="outline">
                  Contact Us
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
