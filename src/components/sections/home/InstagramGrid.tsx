import { Button } from "@/components/ui/Button";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Tbc } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { instagram } from "@/content/home";
import { site } from "@/content/site";

/**
 * Six-image Instagram-style grid. These are sample photos, not real posts. A
 * tile only becomes a link once the account URL (and, later, each post's own
 * `href`) is provided. Nothing about the account is made up.
 */
export function InstagramGrid() {
  const profile = site.contact.instagram;

  return (
    <section className="py-28 md:py-32">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Instagram</Eyebrow>
            <h2 className="mt-4 text-heading uppercase">{instagram.title}</h2>
          </div>
          {profile && site.contact.instagramHandle ? (
            <Button href={profile} variant="outline">
              Follow {site.contact.instagramHandle}
            </Button>
          ) : (
            <Tbc>Instagram link coming soon</Tbc>
          )}
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {instagram.shots.map((shot, i) => {
            const href = shot.href ?? profile;
            const photo = (
              <Photo media={shot.media} label={false} sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw" className="aspect-square" />
            );
            return (
              <li key={shot.media.alt} className="max-md:[&:nth-child(n+5)]:hidden">
                <Reveal delay={i * 0.05} y={16}>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" aria-label={`${shot.media.alt} (opens Instagram)`} className="group block">
                      {photo}
                    </a>
                  ) : (
                    <div className="group">{photo}</div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
