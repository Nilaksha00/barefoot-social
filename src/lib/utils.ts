import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { site } from "@/content/site";

/** Teach tailwind-merge about the custom tokens in globals.css. */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display", "headline", "title", "lede"],
      tracking: ["brand", "wide-plus"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** WhatsApp deep link with an optional pre-filled message. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Zero-padded index label, e.g. 1 -> "01". */
export function indexLabel(i: number) {
  return String(i + 1).padStart(2, "0");
}
