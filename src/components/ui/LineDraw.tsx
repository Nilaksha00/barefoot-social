"use client";

import { motion } from "motion/react";
import { ease, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** A 1px rule that draws itself from left to right when it scrolls into view. */
export function LineDraw({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 1.2, ease, delay }}
      className={cn("block h-px origin-left bg-line", className)}
    />
  );
}
