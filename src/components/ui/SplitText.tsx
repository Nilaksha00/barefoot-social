"use client";

import { motion, type Variants } from "motion/react";
import { duration, ease, viewportOnce } from "@/lib/motion";

type SplitTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  /** Animate on mount instead of when scrolled into view (for above-the-fold text). */
  immediate?: boolean;
};

const word: Variants = {
  hidden: { y: "110%" },
  show: ({ delay }: { delay: number }) => ({ y: "0%", transition: { duration: duration.slow, ease, delay } }),
};

/**
 * Masked word-by-word rise. The in-view trigger sits on the wrapper: each word
 * starts clipped by its mask, so observing the words themselves is unreliable.
 * Screen readers get the plain sentence.
 */
export function SplitText({ text, as: Tag = "span", className, delay = 0, stagger = 0.06, immediate }: SplitTextProps) {
  const words = text.split(" ");
  const trigger = immediate ? { animate: "show" } : { whileInView: "show", viewport: viewportOnce };

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span aria-hidden initial="hidden" {...trigger}>
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            <motion.span className="inline-block" variants={word} custom={{ delay: delay + i * stagger }}>
              {w}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
