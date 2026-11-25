import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Instagram, Mail, WhatsApp } from "@/components/ui/icons";
import { LogoMark, Wordmark } from "@/components/ui/Logo";
import { Tbc } from "@/components/ui/Placeholder";
import { site } from "@/content/site";
import { emailLink, phoneLink, whatsappLink } from "@/lib/utils";

/** Social and contact buttons. Each only appears once its link has been provided. */
function socials() {
  return [
    { label: "Instagram", href: site.contact.instagram, icon: Instagram },
    { label: "WhatsApp", href: whatsappLink(), icon: WhatsApp },
    { label: "Email", href: emailLink(), icon: Mail },
  ].filter((social): social is { label: string; href: string; icon: typeof Instagram } => Boolean(social.href));
}

/** Brand and socials, then Explore and Contact columns, then a legal bar. */
export function Footer() {
  const links = socials();
  const phone = phoneLink();
  const email = emailLink();

  return (
    <footer className="border-t border-line">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 md:grid-cols-12 md:gap-8 md:py-16">
        {/* Brand */}
        <div className="md:col-span-4">
          <Link href="/" aria-label={`${site.name} home`} className="inline-flex items-center gap-4">
            <LogoMark className="w-12" />
            <span className="text-[15px]">
              <Wordmark />
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-mute">
            A social house in Weligama, Sri Lanka, where locals, surfers and travellers feel at home. Eat, drink, stay and connect.
          </p>

          <div className="mt-6">
            {links.length > 0 ? (
              <ul className="flex gap-2">
                {links.map(({ label, href, icon: Icon }) => (
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
            ) : (
              <Tbc>Social links coming soon</Tbc>
            )}
          </div>
        </div>

        {/* Explore */}
        <FooterColumn title="Explore" className="md:col-span-3 md:col-start-6">
          <ul className="space-y-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        {/* Contact */}
        <FooterColumn title="Contact" className="md:col-span-4 md:col-start-9">
          <address className="not-italic">
            <a href={site.address.mapsUrl} target="_blank" rel="noreferrer" className="link-underline">
              {site.address.lines.join(", ")}
            </a>
            {!site.address.confirmed && (
              <span className="mt-2 block">
                <Tbc>Exact address coming soon</Tbc>
              </span>
            )}
          </address>
          <ul className="mt-4 space-y-3">
            <li>
              {phone && site.contact.phoneDisplay ? (
                <a href={phone} className="link-underline">
                  {site.contact.phoneDisplay}
                </a>
              ) : (
                <Tbc>Phone coming soon</Tbc>
              )}
            </li>
            <li>
              {email && site.contact.email ? (
                <a href={email} className="link-underline">
                  {site.contact.email}
                </a>
              ) : (
                <Link href="/find-us#enquire" className="link-underline">
                  Send us an enquiry
                </Link>
              )}
            </li>
          </ul>
        </FooterColumn>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="link-underline">
              Privacy policy
            </Link>
            <span className="uppercase tracking-wide-plus">{site.pillars.join(" • ")}</span>
          </span>
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
