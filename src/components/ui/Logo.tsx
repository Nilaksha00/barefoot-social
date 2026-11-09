"use client";

import { motion } from "motion/react";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Line-drawn approximation of the palm + wave mark.
 * TODO(client): replace the paths with the official vector logo.
 */
const markPaths = [
  // shoreline
  "M6 70 C30 64 74 64 114 69",
  // palm trunk
  "M36 67 C37 54 39 40 46 26",
  // fronds
  "M46 26 C37 18 24 18 14 27",
  "M46 26 C40 14 30 9 19 10",
  "M46 26 C47 15 53 8 62 6",
  "M46 26 C55 18 66 19 73 27",
  "M46 26 C55 27 61 33 63 42",
  // wave curl
  "M72 67 C84 66 97 60 101 46 C104 35 96 28 87 31 C80 34 81 43 88 44",
  // spray
  "M104 40 C108 37 111 37 114 38",
  "M103 33 C106 29 109 28 112 28",
];

export function LogoMark({ className, animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 120 76" fill="none" aria-hidden className={cn("text-current", className)}>
      {markPaths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth={2.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.2 + i * 0.08 }}
        />
      ))}
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex flex-col items-center leading-none", className)}>
      <span className="tracking-brand pl-[0.42em] text-[0.95em] font-medium uppercase">Barefoot</span>
      <span className="mt-[0.45em] pl-[0.42em] text-[0.55em] tracking-brand uppercase">Social</span>
    </span>
  );
}
