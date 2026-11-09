"use client";

import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Container";
import { ArrowUpRight } from "@/components/ui/icons";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { pillars } from "@/content/home";
import { indexLabel } from "@/lib/utils";

/**
 * The four pillars as an oversized typographic index. Hovering a row dims the
 * others and sweeps a rule beneath it; on mobile a thumbnail shows inline.
 */
export function Pillars() {
  return (
    <section className="pb-28 md:pb-44">
      <Container>
        <Reveal>
          <Eyebrow>Under one roof</Eyebrow>
        </Reveal>

        <ul className="group/list mt-10 border-t border-line md:mt-14">
          {pillars.map((pillar, i) => (
            <li key={pillar.title} className="border-b border-line">
              <Reveal delay={i * 0.06} y={20}>
                <Link
                  href={pillar.href}
                  className="group relative grid grid-cols-[2rem_1fr_auto] items-center gap-4 py-7 transition-opacity duration-500 group-hover/list:opacity-30 hover:opacity-100! md:grid-cols-[4rem_1fr_minmax(0,20rem)_3rem] md:gap-8 md:py-10"
                >
                  <span className="self-start pt-2 text-[11px] tracking-wide-plus text-mute md:pt-4">{indexLabel(i)}</span>

                  <span className="min-w-0">
                    <span className="block text-[clamp(3rem,10vw,8.5rem)] uppercase leading-[0.88] transition-transform duration-700 ease-out-expo md:group-hover:translate-x-4">
                      {pillar.title}
                    </span>
                    <span className="mt-2 block font-serif text-xl italic text-ink-soft md:hidden">{pillar.kicker}</span>
                  </span>

                  <span className="hidden md:block">
                    <span className="block font-serif text-2xl italic">{pillar.kicker}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-mute">{pillar.description}</span>
                  </span>

                  <span className="flex items-center gap-3 justify-self-end">
                    <Media media={pillar.media} label={false} sizes="64px" className="size-16 rounded-xl md:hidden" />
                    <span className="hidden size-12 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper md:flex">
                      <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
                    </span>
                  </span>

                  {/* Ink rule that sweeps across under the hovered row */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -bottom-px hidden h-px origin-left scale-x-0 bg-ink transition-transform duration-700 ease-out-expo group-hover:scale-x-100 md:block"
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
