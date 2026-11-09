"use client";

import { animate, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { LogoMark, Wordmark } from "@/components/ui/Logo";
import { SplitText } from "@/components/ui/SplitText";
import { hero } from "@/content/home";
import { site } from "@/content/site";
import { ease } from "@/lib/motion";

/**
 * Poster-style hero over a slow, muted video of the sea. The clip fades in once
 * it can play and settles from a slight zoom; scrolling drifts it down while
 * the copy lifts away. Reduced motion shows the still poster instead.
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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-ink px-5 pb-24 pt-32 text-center text-paper"
    >
      {/* Background */}
      <motion.div style={reduce ? undefined : { y: videoY }} className="absolute inset-0 -z-10">
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

      <motion.div style={{ y, opacity }} className="flex flex-col items-center">
        <LogoMark animated className="w-28 md:w-36" />
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0em" }}
          transition={{ duration: 1.6, ease, delay: 0.6 }}
          className="mt-6 text-lg md:text-2xl"
        >
          <Wordmark />
        </motion.div>

        <h1 className="mt-14 uppercase md:mt-16">
          <SplitText immediate delay={0.9} text={hero.titleTop} className="block text-display" />
          <SplitText immediate delay={1.05} stagger={0.05} text={hero.titleBottom} className="mt-2 block text-[clamp(1.6rem,5.4vw,5.25rem)] leading-none" />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-10 pl-[0.42em] text-[11px] uppercase tracking-brand md:text-xs"
        >
          {site.pillars.join(" • ")}
        </motion.p>
      </motion.div>
    </section>
  );
}
