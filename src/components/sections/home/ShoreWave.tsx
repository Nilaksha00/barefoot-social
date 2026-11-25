"use client";

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

// Each crest occupies 100 horizontal units. The view width controls its spacing.
const layers = [
  { name: "far", width: 190, baseline: 39, opacity: 0.13, seconds: 28, offset: 42 },
  { name: "near", width: 215, baseline: 51, opacity: 0.23, seconds: 20, offset: 8 },
  { name: "breaker", width: 155, baseline: 66, opacity: 1, seconds: 13, offset: 59 },
] as const;

function waveLift(time: number, crest: number) {
  return (1 + Math.sin(time * 0.58 + crest * 2.4)) / 2;
}

function breakerInset(lift: number) {
  // Inset the crest and its following trough equally toward their midpoint.
  return 18 * (1 - lift);
}

function wavePath(layer: (typeof layers)[number], time: number) {
  const travel = layer.offset + (time / layer.seconds) * 100;
  const cycle = Math.floor(travel / 100);
  const start = travel - cycle * 100 - 100;
  const base = layer.baseline;
  let trough = layer.name === "breaker" ? base - breakerInset(waveLift(time, -cycle - 1)) : base;
  let path = `M ${start} ${trough}`;

  for (let x = start, crest = -cycle; x < layer.width; x += 100, crest++) {
    // Keep each crest's phase as it crosses the frame and another enters on the left.
    const lift = waveLift(time, crest);
    if (layer.name === "breaker") {
      const inset = breakerInset(lift);
      const peak = 11 + inset;
      const nextTrough = base - inset;
      const scale = (nextTrough - peak) / (base - 11);
      const lip = x + 54;
      path += ` C ${x + 24} ${trough} ${x + 38} ${peak} ${lip} ${peak}`;
      // Relative smooth curves share a tangent around the lip and down the inner face.
      path += ` c ${5 * scale} 0 ${10 * scale} ${7 * scale} ${10 * scale} ${15 * scale}`;
      path += ` s ${-1.2 * scale} ${5 * scale} ${-1.6 * scale} ${3 * scale}`;
      path += ` s ${-8.4 * scale} ${-7 * scale} ${-9.2 * scale} ${7 * scale}`;
      path += ` s ${3 * scale} ${21 * scale} ${9 * scale} ${25 * scale}`;
      path += ` S ${x + 82} ${nextTrough} ${x + 100} ${nextTrough}`;
      trough = nextTrough;
    } else {
      const peak = base - 15 - 10 * lift;
      path += ` C ${x + 22} ${base} ${x + 35} ${peak} ${x + 55} ${peak}`;
      path += ` S ${x + 81} ${base} ${x + 100} ${base}`;
    }
  }
  return `${path} V100 H${start} Z`;
}

export function ShoreWave() {
  const band = useRef<HTMLDivElement>(null);
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const elapsed = useRef(0);
  const visible = useInView(band);

  useEffect(() => {
    if (!visible) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let last: number | undefined;

    function draw(now: number) {
      elapsed.current += last === undefined ? 0 : (now - last) / 1000;
      last = now;
      layers.forEach((layer, i) => {
        paths.current[i]?.setAttribute("d", wavePath(layer, elapsed.current));
      });
      frame = requestAnimationFrame(draw);
    }

    function syncMotion() {
      cancelAnimationFrame(frame);
      last = undefined;
      if (!preference.matches && !document.hidden) frame = requestAnimationFrame(draw);
    }

    syncMotion();
    preference.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncMotion);
    return () => {
      cancelAnimationFrame(frame);
      preference.removeEventListener("change", syncMotion);
      document.removeEventListener("visibilitychange", syncMotion);
    };
  }, [visible]);

  return (
    <div ref={band} className="shore-wave" aria-hidden="true">
      {layers.map((layer, i) => (
        <svg
          key={layer.name}
          viewBox={`0 0 ${layer.width} 100`}
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full min-w-[36rem] fill-current"
          opacity={layer.opacity}
        >
          <path ref={(el) => { paths.current[i] = el; }} d={wavePath(layer, 0)} />
        </svg>
      ))}
    </div>
  );
}
