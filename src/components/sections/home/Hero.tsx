"use client";

import { animate, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";
import { SplitText } from "@/components/ui/SplitText";
import { hero } from "@/content/home";
import { site } from "@/content/site";
import { ease } from "@/lib/motion";

/**
 * Poster-style hero over a slow, muted video of the sea. The clip fades in once
 * it can play. A curling wave rises over the film on the first scroll.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fade the clip in once it can play. It may already be playable before
  // hydration, so check readyState as well as listening for "canplay".
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reveal = () => animate(video, { opacity: 1, scale: 1 }, { duration: 2.2, ease });
    if (video.readyState >= 3) {
      reveal();
      return;
    }
    video.addEventListener("canplay", reveal, { once: true });
    return () => video.removeEventListener("canplay", reveal);
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 0.65], ["0svh", "-12svh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.58], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 1.065]);

  return (
    <section ref={ref} className="home-shoreline">
      <div className="home-shoreline-film isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-ink px-5 pb-24 pt-32 text-center text-paper">
        {/* Background */}
        <motion.div style={reduce ? undefined : { scale }} className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element -- plain poster behind the video, no layout cost */}
          <img src={hero.video.poster} alt="" aria-hidden className="absolute inset-0 size-full object-cover" />
          {!reduce && (
            <video
              ref={videoRef}
              aria-hidden
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={hero.video.poster}
              style={{ opacity: 0, transform: "scale(1.08)" }}
              className="absolute inset-0 size-full object-cover"
            >
              <source src={hero.video.srcMobile} type="video/mp4" media="(max-width: 767px)" />
              <source src={hero.video.src} type="video/mp4" />
            </video>
          )}
        </motion.div>

        {/* Darken evenly for the white copy, a little more at the top for the header. */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-ink/45" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/40 via-transparent to-ink/50" />

        <motion.div style={reduce ? undefined : { y, opacity }} className="flex flex-col items-center">
          <LogoMark animated className="w-24 md:w-32" />
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.42em" }}
            transition={{ duration: 1.6, ease, delay: 0.6 }}
            className="mt-6 pl-[0.42em] text-[11px] font-medium uppercase md:text-sm"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-10 max-w-5xl uppercase md:mt-12">
            <SplitText immediate delay={0.9} stagger={0.1} text={hero.title} className="block text-[clamp(2.75rem,8.4vw,8rem)] leading-[0.95]" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.5 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-paper/90 md:text-xl"
          >
            {hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.7 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <Button href="#explore" variant="light">
              Explore Barefoot
            </Button>
            <Button href={site.bookingUrl} variant="outline-light">
              {site.bookLabel}
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="shore-wave" aria-hidden="true">
        <svg viewBox="0 0 1200 180" preserveAspectRatio="none" focusable="false">
          <path className="shore-wave-swell" fill="currentColor" opacity=".33"
            d="M-180 82 C40 16 170 122 350 92 S610 18 770 65 S1040 121 1380 45 V200 H-180Z" />
          <path className="shore-wave-crest" fill="currentColor"
            d="M-180 84 C20 40 136 133 337 119 C457 111 513 88 582 52 C650 16 704 9 743 35 C760 46 763 61 752 73 C756 53 731 48 712 59 C680 79 696 109 745 116 C903 143 1033 59 1199 76 C1260 82 1320 95 1380 84 V200 H-180Z" />
        </svg>
      </div>
    </section>
  );
}
