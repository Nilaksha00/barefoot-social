import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { site } from "@/content/site";

/** Teach tailwind-merge about the custom tokens in globals.css. */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display", "headline", "heading", "title", "lede"],
      tracking: ["brand", "wide-plus"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** WhatsApp deep link with an optional pre-filled message, or `null` until the number is provided. */
export function whatsappLink(message?: string) {
  if (!site.contact.whatsapp) return null;
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** mailto link, or `null` until the email address is provided. */
export function emailLink(subject?: string) {
  if (!site.contact.email) return null;
  return subject ? `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}` : `mailto:${site.contact.email}`;
}

/** tel link built from the display number, or `null` until it is provided. */
export function phoneLink() {
  const number = site.contact.phoneDisplay?.replace(/[^\d+]/g, "");
  return number ? `tel:${number}` : null;
}

/** Zero-padded index label, e.g. 1 -> "01". */
export function indexLabel(i: number) {
  return String(i + 1).padStart(2, "0");
}

/** URL-safe id from a label, e.g. "Private Room 01" -> "private-room-01". */
export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
