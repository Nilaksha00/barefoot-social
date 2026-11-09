"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { Plus } from "@/components/ui/icons";
import type { Faq } from "@/types/content";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <ul className="border-t border-line">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <li key={faq.question} className="border-b border-line">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${id}-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left text-lg md:text-xl"
            >
              <span className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5">{faq.question}</span>
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-500",
                  isOpen ? "border-ink bg-ink text-paper" : "border-line group-hover:border-ink",
                )}
              >
                <Plus className={cn("size-4 transition-transform duration-500 ease-out-expo", isOpen && "rotate-45")} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-mute">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
