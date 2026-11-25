import { cn } from "@/lib/utils";

// Brush strokes in the cropped artwork's 516 × 377 coordinate system.
const strokes = [
  { d: "M1 342 Q79 300 174 332 C258 362 330 374 390 370", width: 32, start: 0, duration: 520 },
  { d: "M78 323 Q97 235 166 132", width: 39, start: 380, duration: 370 },
  { d: "M166 132 Q191 37 113 3", width: 56, start: 680, duration: 225 },
  { d: "M166 132 Q108 41 30 93", width: 59, start: 820, duration: 230 },
  { d: "M166 132 Q91 111 43 186", width: 53, start: 965, duration: 215 },
  { d: "M166 132 Q249 62 313 113", width: 49, start: 1110, duration: 210 },
  { d: "M166 132 Q243 123 274 193", width: 48, start: 1250, duration: 205 },
  { d: "M166 132 Q223 190 185 264", width: 44, start: 1390, duration: 230 },
  { d: "M216 330 C310 324 359 381 515 345", width: 26, start: 1530, duration: 380 },
  { d: "M413 341 C305 331 253 271 311 206 S430 144 515 198", width: 96, start: 1790, duration: 590 },
  { d: "M378 326 L389 294 Q390 280 415 278 L432 273 L429 245 L427 218", width: 34, start: 2260, duration: 300 },
  { d: "M428 246 Q407 236 373 236", width: 17, start: 2490, duration: 160 },
  { d: "M433 243 Q456 254 459 301", width: 18, start: 2550, duration: 165 },
  { d: "M349 309 Q365 312 398 328", width: 25, start: 2660, duration: 170 },
];

export function LogoMark({ className, animated = false }: { className?: string; animated?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block aspect-[516/377] shrink-0 bg-current mask-[url('/images/barefoot-social-mark.png')] mask-contain mask-center mask-no-repeat",
        animated && "logo-drawing",
        className,
      )}
    >
      {animated && (
        <svg viewBox="0 0 516 377" fill="none" stroke="currentColor" strokeLinecap="round">
          {strokes.map(({ d, width, start, duration }) => (
            <path
              key={d}
              d={d}
              strokeWidth={width}
              pathLength="1"
              style={{ animationDelay: `${start}ms`, animationDuration: `${duration}ms` }}
            />
          ))}
        </svg>
      )}
    </span>
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
