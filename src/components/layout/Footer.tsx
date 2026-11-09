import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Instagram, Mail, WhatsApp } from "@/components/ui/icons";
import { LogoMark, Wordmark } from "@/components/ui/Logo";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/utils";

const socials = [
  { label: "Instagram", href: site.contact.instagram, icon: Instagram },
  { label: "WhatsApp", href: whatsappLink(), icon: WhatsApp },
  { label: "Email", href: `mailto:${site.contact.email}`, icon: Mail },
];

/** Standard footer: brand and socials, then Explore and Contact columns, then a legal bar. */
export function Footer() {
  return (
    <footer className="mt-20 border-t border-line md:mt-28">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 md:grid-cols-12 md:gap-8 md:py-16">
        {/* Brand */}
        <div className="md:col-span-4">
          <Link href="/" aria-label={`${site.name} home`} className="inline-flex items-center gap-4">
            <LogoMark className="w-12" />
            <span className="text-[15px]">
              <Wordmark />
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">{site.tagline}.</p>

          <ul className="mt-6 flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-line transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <FooterColumn title="Explore" className="md:col-span-2 md:col-start-7">
          <ul className="space-y-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">{item.label}</Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        {/* Contact */}
        <FooterColumn title="Contact" className="md:col-span-3 md:col-start-10">
          <address className="not-italic">
            <a href={site.address.mapsUrl} target="_blank" rel="noreferrer" className="link-underline">
              {site.address.lines.join(", ")}
            </a>
          </address>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="link-underline">{site.contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="link-underline">{site.contact.email}</a>
            </li>
          </ul>
        </FooterColumn>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="uppercase tracking-wide-plus">{site.pillars.join(" • ")}</span>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <h2 className="text-[11px] font-medium uppercase tracking-wide-plus text-mute">{title}</h2>
      <div className="mt-5 text-sm">{children}</div>
    </div>
  );
}
