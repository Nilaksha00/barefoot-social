"use client";

import Image, { type ImageLoader } from "next/image";
import type { MediaRef, Tone } from "@/types/content";
import { cn } from "@/lib/utils";

/** Tonal stand-ins used when an item has no photo yet. */
const tones: Record<Tone, string> = {
  sand: "linear-gradient(165deg, #f4ecdd 0%, #e4d5ba 50%, #c7ad85 100%)",
  ocean: "linear-gradient(180deg, #dce7e3 0%, #9fbfbc 38%, #4f8389 68%, #1f4e5a 100%)",
  dusk: "linear-gradient(180deg, #f2cfa6 0%, #e6a172 36%, #bd5e3b 62%, #3e2c33 100%)",
  palm: "linear-gradient(170deg, #e7e8d2 0%, #adb487 42%, #5e6c44 74%, #2c3723 100%)",
  ink: "linear-gradient(160deg, #46433d 0%, #24221f 55%, #141412 100%)",
};

/** Let Unsplash's CDN do the resizing instead of downloading huge originals. */
const unsplashLoader: ImageLoader = ({ src, width, quality }) =>
  `${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 75}`;

type MediaProps = {
  media: MediaRef;
  className?: string;
  sizes?: string;
  preload?: boolean;
  /** Show the "Photo · …" label on placeholders so the client knows what goes where. */
  label?: boolean;
};

export function Media({ media, className, sizes = "100vw", preload, label = true }: MediaProps) {
  if (media.src) {
    const isUnsplash = media.src.startsWith("https://images.unsplash.com/");
    return (
      <div className={cn("relative overflow-hidden bg-sand", className)}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          preload={preload}
          loader={isUnsplash ? unsplashLoader : undefined}
          className="object-cover text-transparent"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={media.alt}
      className={cn("relative overflow-hidden", className)}
      style={{ backgroundImage: tones[media.tone] }}
    >
      <div aria-hidden className="grain absolute inset-0" />
      {label && (
        <span aria-hidden className="absolute bottom-3 left-3 max-w-[80%] truncate text-[10px] uppercase tracking-wide-plus text-white/85">
          Photo · {media.alt}
        </span>
      )}
    </div>
  );
}
