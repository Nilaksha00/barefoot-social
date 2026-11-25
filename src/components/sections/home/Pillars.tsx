"use client";

import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Container";
import { ArrowUpRight } from "@/components/ui/icons";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { pillars } from "@/content/home";
import { indexLabel } from "@/lib/utils";

/**
 * The four pillars as a typographic index. Hovering a row dims the
 * others and reveals its photo. On mobile the thumbnail is always visible.
 */
export function Pillars() {
  return (
    <section className="pb-28 md:pb-44">
      <Container>
        <Reveal>
          <Eyebrow>Under one roof</Eyebrow>
        </Reveal>

        <ul className="group/list mt-6 border-t border-line md:mt-8">
          {pillars.map((pillar, i) => (
            <li key={pillar.title} className="border-b border-line">
              <Reveal delay={i * 0.06} y={20}>
                <Link
                  href={pillar.href}
                  className="group relative grid grid-cols-[2rem_1fr_auto] items-center gap-4 py-5 transition-opacity duration-500 group-hover/list:opacity-70 hover:opacity-100! focus-visible:opacity-100! md:grid-cols-[3rem_1fr_minmax(0,1.15fr)_3rem] md:gap-6 md:py-6"
                >
                  <span className="text-xs tracking-wide-plus text-mute">{indexLabel(i)}</span>

                  <span className="min-w-0">
                    <span className="block text-[clamp(2rem,3.75vw,3.5rem)] uppercase leading-none transition-transform duration-700 ease-out-expo md:group-hover:translate-x-2">
                      {pillar.title}
                    </span>
                    <span className="mt-2 block font-serif text-xl italic text-ink-soft md:hidden">{pillar.kicker}</span>
                  </span>

                  <span className="hidden md:block">
                    <span className="block font-serif text-2xl italic">{pillar.kicker}</span>
                    <span className="mt-2 block text-base leading-relaxed text-mute">{pillar.description}</span>
                  </span>

                  <span className="relative grid size-16 place-items-center justify-self-end overflow-hidden rounded-xl md:size-12 md:rounded-full md:border md:border-line">
                    <Media
                      media={pillar.media}
                      label={false}
                      sizes="64px"
                      className="absolute inset-0 md:scale-110 md:opacity-0 md:transition-[opacity,scale] md:duration-500 md:group-hover:scale-100 md:group-hover:opacity-100 md:group-focus-visible:scale-100 md:group-focus-visible:opacity-100"
                    />
                    <ArrowUpRight className="relative hidden size-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 md:block" />
                  </span>

                  {/* Ink rule that sweeps across under the hovered row */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -bottom-px hidden h-px origin-left scale-x-0 bg-ink transition-transform duration-700 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100 md:block"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>

    </section>
  );
}
