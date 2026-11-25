"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis root options={{ lerp: 0.1, anchors: true }}>
        <ScrollReset />
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}

/**
 * Jump to the top on route change so Lenis doesn't keep the old offset. When the
 * link carries a #hash (e.g. /find-us#enquire), scroll to that section instead.
 */
function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    const hash = window.location.hash;
    const target = hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) lenis.scrollTo(target, { immediate: true, offset: -80 });
    else lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);
  return null;
}
