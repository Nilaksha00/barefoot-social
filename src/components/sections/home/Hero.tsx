"use client";

import { animate, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { ShoreWave } from "@/components/sections/home/ShoreWave";
import { LogoMark } from "@/components/ui/Logo";
import { hero } from "@/content/home";
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

        {/* Minimal on purpose: the mark, the name, where we are, and one quiet line. */}
        <motion.div style={reduce ? undefined : { y, opacity }} className="flex w-full flex-col items-center">
          <LogoMark animated className="w-28 md:w-40" />

          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.08em" }}
            animate={{ opacity: 1, letterSpacing: "0.22em" }}
            transition={{ duration: 1.8, ease, delay: 0.5 }}
            className="mt-8 pl-[0.22em] text-[clamp(1.75rem,5.4vw,4.5rem)] font-medium uppercase leading-[1.1] md:mt-10"
          >
            {hero.brand}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.1 }}
            className="mt-4 pl-[0.42em] text-[11px] font-medium uppercase tracking-brand md:text-sm"
          >
            {hero.place}
          </motion.p>
        </motion.div>

        {/* The tagline rests at the foot of the hero, just above the waves. */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.5 }}
          className="absolute inset-x-0 bottom-8 px-5 pl-[calc(1.25rem+0.42em)] text-center text-[11px] font-medium uppercase tracking-brand text-paper/90 md:bottom-10 md:text-xs"
        >
          {hero.title}
        </motion.p>
      </div>
      <ShoreWave />
    </section>
  );
}
