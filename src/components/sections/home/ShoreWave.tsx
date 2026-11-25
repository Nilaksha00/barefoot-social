"use client";

import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** The page colour, so the front wave melts into the section below the hero. */
const FILL = "#f7f6f2";

/**
 * One breaking wave: it rises, curls over and breaks, then settles. Its start and end
 * heights and tangents match (84 and a slope of about -0.22), so copies repeat without a seam.
 */
const CURL_PATH =
  "M0 84 C200 40 316 133 517 119 C637 111 693 88 762 52 C830 16 884 9 923 35 C940 46 943 61 932 73 " +
  "C936 53 911 48 892 59 C860 79 876 109 925 116 C1083 143 1213 59 1379 76 C1440 82 1500 97 1560 84 V200 H0 Z";

/** A plain rolling swell, as an open path of one period. */
function swellPath(period: number, crest: number, trough: number) {
  return `M0 50 C${period * 0.25} ${crest} ${period * 0.75} ${trough} ${period} 50 V100 H0 Z`;
}

function tile(viewW: number, viewH: number, d: string) {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${viewW} ${viewH}' preserveAspectRatio='none'>` +
    `<path fill='${FILL}' d='${d}'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

type Layer = {
  id: string;
  /** Width in px of one repeating wave, given the width of the band. */
  period: (width: number) => number;
  image: (period: number) => string;
  opacity: number;
  top: string;
  /** Idle drift to the right, in px per second. */
  speed: number;
  /** Extra push to the right, in px per px scrolled. */
  scroll: number;
};

/** Back to front: two faint swells, then the solid breaking wave in the page colour. */
const layers: Layer[] = [
  {
    id: "swell-far",
    period: () => 1100,
    image: (p) => tile(p, 100, swellPath(p, 4, 96)),
    opacity: 0.3,
    top: "14%",
    speed: 12,
    scroll: 0.2,
  },
  {
    id: "swell-near",
    period: () => 760,
    image: (p) => tile(p, 100, swellPath(p, 14, 86)),
    opacity: 0.5,
    top: "34%",
    speed: 20,
    scroll: 0.35,
  },
  {
    id: "curl",
    period: (w) => Math.max(w * 1.15, 720),
    image: () => tile(1560, 200, CURL_PATH),
    opacity: 1,
    top: "0%",
    speed: 26,
    scroll: 0.5,
  },
];

function WaveLayer({
  layer,
  width,
  scrollY,
  still,
}: {
  layer: Layer;
  width: number;
  scrollY: MotionValue<number>;
  still: boolean;
}) {
  const x = useMotionValue(0);
  const period = layer.period(width);

  // Move right forever, and faster while the page scrolls. The layer is one wave wider than
  // the band and parked one wave to the left, so shifting by less than a wave never shows a gap.
  useAnimationFrame((time) => {
    if (still) return;
    x.set(((time / 1000) * layer.speed + scrollY.get() * layer.scroll) % period);
  });

  return (
    <motion.div
      style={{
        x,
        top: layer.top,
        left: -period,
        width: `calc(100% + ${period}px)`,
        opacity: layer.opacity,
        backgroundImage: layer.image(period),
        backgroundSize: `${period}px 100%`,
      }}
      className="absolute bottom-0 bg-repeat-x will-change-transform"
    />
  );
}

/** Animated shoreline under the hero: faint swells and a breaking wave that all roll right, and roll further as you scroll. */
export function ShoreWave() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1280);

  // The breaking wave is sized to the band, so it always shows a whole curl, on a phone or a wide screen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setWidth(el.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="shore-wave" aria-hidden="true">
      {layers.map((layer) => (
        <WaveLayer key={layer.id} layer={layer} width={width} scrollY={scrollY} still={Boolean(reduce)} />
      ))}
    </div>
  );
}
