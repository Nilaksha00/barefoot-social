import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { LineDraw } from "@/components/ui/LineDraw";
import { Reveal } from "@/components/ui/Reveal";
import type { MenuGroup, Step } from "@/types/content";
import { site } from "@/content/site";
import { cn, indexLabel, whatsappLink } from "@/lib/utils";

const surfaces = {
  plain: "",
  sand: "bg-sand",
  ink: "bg-ink text-paper",
} as const;

/**
 * Generic section with a heading row. The sand surface renders as a rounded
 * card inset from the viewport edge; the ink surface runs full width with
 * square edges, so it meets the photo hero above it cleanly.
 */
export function Section({
  eyebrow,
  title,
  aside,
  children,
  surface = "plain",
  className,
}: {
  eyebrow?: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
  surface?: keyof typeof surfaces;
  className?: string;
}) {
  const card = surface === "sand";
  return (
    <section className={cn(card && "px-3 md:px-6", className)}>
      <div className={cn("relative overflow-hidden py-24 md:py-36", card && "rounded-[var(--radius-card)]", surfaces[surface])}>
        {surface === "ink" && <div aria-hidden className="grain pointer-events-none absolute inset-0" />}
        <Container className="relative">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              <h2 className="mt-4 max-w-3xl text-title uppercase">{title}</h2>
            </div>
            {aside}
          </Reveal>
          <div className="mt-14 md:mt-20">{children}</div>
        </Container>
      </div>
    </section>
  );
}

/** Numbered columns — used for principles, journeys, chapters, directions. */
export function StepGrid({ steps, columns = 3 }: { steps: Step[]; columns?: 2 | 3 | 4 }) {
  return (
    <ol className={cn("grid gap-10 sm:grid-cols-2 md:gap-8", columns === 4 ? "lg:grid-cols-4" : columns === 3 && "lg:grid-cols-3")}>
      {steps.map((step, i) => (
        <li key={step.title}>
          <LineDraw delay={i * 0.12} className="bg-current/20" />
          <Reveal delay={0.15 + i * 0.08} className="pt-6">
            <span className="text-[11px] tracking-wide-plus opacity-50">{indexLabel(i)}</span>
            <h3 className="mt-6 text-2xl uppercase">{step.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed opacity-70">{step.description}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

/** Two-column printed-menu style list. */
export function MenuList({ groups }: { groups: MenuGroup[] }) {
  return (
    <div className="grid gap-16 md:grid-cols-2 md:gap-x-20 md:gap-y-20">
      {groups.map((group) => (
        <Reveal key={group.title}>
          <div className="flex items-baseline justify-between pb-4">
            <h3 className="text-xl uppercase tracking-wide-plus">{group.title}</h3>
            {group.note && <span className="text-xs tabular-nums text-mute">{group.note}</span>}
          </div>
          <LineDraw className="bg-ink" />
          <ul className="divide-y divide-line">
            {group.items.map((item, i) => (
              <li key={item.name}>
                <Reveal delay={0.1 + i * 0.05} y={12} className="group/item flex items-start justify-between gap-6 py-5">
                  <div className="transition-transform duration-500 ease-out-expo group-hover/item:translate-x-1.5">
                    <p className="text-lg">{item.name}</p>
                    <p className="mt-1 text-sm text-mute">{item.description}</p>
                  </div>
                  {item.tags && (
                    <span className="flex shrink-0 gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-line px-2 py-0.5 text-[10px] tracking-wide-plus text-mute">
                          {tag}
                        </span>
                      ))}
                    </span>
                  )}
                </Reveal>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

/**
 * Closing card for Stay and Surf. Bookings happen on Booking.com only, so the
 * primary action links there; WhatsApp and email are offered for questions.
 */
export function ActionSection({
  id,
  eyebrow,
  title,
  body,
  primary,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  primary?: { label: string; href: string };
}) {
  return (
    <section id={id} className="px-3 md:px-6">
      <div className="rounded-[var(--radius-card)] bg-sand py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-6">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-headline uppercase">{title}</h2>
            <p className="mt-6 max-w-md text-mute">{body}</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
            {primary && <Button href={primary.href}>{primary.label}</Button>}
            <div className={cn(primary && "mt-10 border-t border-line pt-8")}>
              <p className="text-[11px] uppercase tracking-wide-plus text-mute">Questions? Ask us</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={whatsappLink("Hi Barefoot Social! I have a question.")} variant="outline">WhatsApp</Button>
                <Button href={`mailto:${site.contact.email}`} variant="outline">Email</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
