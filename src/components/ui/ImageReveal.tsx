"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { ease, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Unveils a photo from the bottom edge while it settles from a slight zoom,
 * the first time it scrolls into view.
 */
export function ImageReveal({
  children,
  className,
  delay = 0,
  radius = "28px",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  radius?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={cn("overflow-hidden", className)} style={{ borderRadius: radius }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ clipPath: `inset(100% 0% 0% 0% round ${radius})` }}
      whileInView={{ clipPath: `inset(0% 0% 0% 0% round ${radius})` }}
      viewport={viewportOnce}
      transition={{ duration: 1.2, ease, delay }}
      className={cn("overflow-hidden", className)}
      style={{ borderRadius: radius }}
    >
      <motion.div
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 1.6, ease, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
