"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Hairline reading-progress bar across the top of the viewport. Blend mode
 * difference keeps it visible over white pages and dark photos alike.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-white mix-blend-difference"
    />
  );
}
