"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { SplitText } from "@/components/ui/SplitText";
import type { PageIntro as PageIntroData } from "@/types/content";
import { duration, ease } from "@/lib/motion";

/**
 * Shared hero for inner pages: the photo fills the section as a background,
 * with the title and lede set over it in white. The home page has its own hero.
 */
export function PageIntro({ intro }: { intro: PageIntroData }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink text-paper md:min-h-svh">
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease }}
        className="absolute inset-0 -z-10"
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <Media media={intro.media} className="h-full w-full bg-ink" preload label={false} />
        </motion.div>
      </motion.div>

      {/* Darken the top for the header and the bottom for the copy. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/45 via-ink/10 to-ink/75" />

      <Container className="pb-14 pt-40 md:pb-20">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
            <Eyebrow>{intro.eyebrow}</Eyebrow>
          </motion.div>
          <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
            <SplitText as="h1" immediate delay={0.45} text={intro.title} className="block text-headline uppercase md:col-span-8" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, ease, delay: 0.9 }}
              className="max-w-md text-lg leading-relaxed text-paper/85 md:col-span-4 md:pb-2"
            >
              {intro.lede}
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
