"use client";

import { useLenis } from "lenis/react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/ui/Logo";
import { Magnetic } from "@/components/ui/Magnetic";
import { site } from "@/content/site";
import { ease } from "@/lib/motion";
import { cn, emailLink, indexLabel, whatsappLink } from "@/lib/utils";

/** Floating glass "pill" header. Stays pinned to the top of every page so navigation and booking are always one tap away. */
export function Header() {
  const pathname = usePathname();
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  const close = () => setOpen(false);

  // Home opens on a video and inner pages on a full-bleed photo, so the header is light until it gains its own background.
  const hasPhotoHero = site.nav.some((item) => item.href === pathname);
  const onPhoto = hasPhotoHero && !scrolled && !open;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="px-3 pt-3 md:px-6 md:pt-4">
          <div
            className={cn(
              "mx-auto flex h-14 max-w-[1440px] items-center justify-between rounded-full pl-1.5 pr-2 transition-[background-color,box-shadow,border-color] duration-500 md:h-16 lg:pl-7",
              scrolled || open
                ? "border border-line bg-cream/85 backdrop-blur-xl"
                : "border border-transparent",
              onPhoto && "text-paper",
            )}
          >
            <div className="relative z-10 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="flex size-11 items-center justify-center rounded-full lg:hidden"
              >
                <span className="relative block h-2.5 w-6" aria-hidden>
                  <span className={cn("absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ease-out-expo", open && "translate-y-[5px] rotate-45")} />
                  <span className={cn("absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-500 ease-out-expo", open && "-translate-y-[4px] -rotate-45")} />
                </span>
              </button>
              <Link href="/" onClick={close} aria-label={`${site.name} home`} className="text-[14px] md:text-[15px]">
                <Wordmark />
              </Link>
            </div>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {site.nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href} className="relative">
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative z-10 block rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-wide-plus transition-colors duration-300",
                          active ? (onPhoto ? "text-ink" : "text-paper") : onPhoto ? "hover:bg-paper/15" : "hover:bg-ink/5",
                        )}
                      >
                        {item.label}
                      </Link>
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className={cn("absolute inset-0 rounded-full transition-colors duration-500", onPhoto ? "bg-paper" : "bg-ink")}
                          transition={{ duration: 0.5, ease }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="relative z-10 flex items-center gap-2">
              <Magnetic>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full px-4 text-[11px] font-medium uppercase tracking-wide-plus transition-colors duration-500 sm:px-5 md:h-12",
                    onPhoto ? "bg-paper text-ink hover:bg-paper/85" : "bg-ink text-paper hover:bg-ink-soft",
                  )}
                >
                  <span className="hidden size-1.5 animate-pulse rounded-full bg-current sm:block" aria-hidden />
                  <span>
                    Book<span className="hidden sm:inline"> Your Stay</span>
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease }}
            className="fixed inset-0 z-40 flex flex-col bg-cream px-5 pb-10 pt-28 md:px-10 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex-1">
              <ul className="space-y-1">
                {site.nav.map((item, i) => (
                  <li key={item.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.8, ease, delay: 0.15 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={close}
                        className="flex items-baseline gap-4 py-1 text-[clamp(2.5rem,10vw,4.5rem)] uppercase leading-[1.05]"
                      >
                        <span className={cn("text-xs tracking-wide-plus", pathname === item.href ? "opacity-100" : "opacity-50")}>
                          {indexLabel(i)}
                        </span>
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6 text-xs uppercase tracking-wide-plus"
            >
              <a href={site.bookingUrl} target="_blank" rel="noreferrer">{site.bookLabel}</a>
              {whatsappLink() && <a href={whatsappLink()!} target="_blank" rel="noreferrer">WhatsApp</a>}
              {emailLink() && <a href={emailLink()!}>Email</a>}
              {site.contact.instagram && <a href={site.contact.instagram} target="_blank" rel="noreferrer">Instagram</a>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
