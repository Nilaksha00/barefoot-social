import { ImageReveal } from "@/components/ui/ImageReveal";
import { Media } from "@/components/ui/Media";
import type { MediaRef } from "@/types/content";
import { cn } from "@/lib/utils";

/** Corner radius shared by every editorial photograph. */
export const PHOTO_RADIUS = "4px";

type PhotoProps = {
  media: MediaRef;
  /** Sets the aspect ratio, e.g. "aspect-[4/5]". Photos always `object-cover`. */
  className?: string;
  sizes?: string;
  preload?: boolean;
  /** Show the shoot-brief label on placeholders. */
  label?: boolean;
  /** Square corners, for full-bleed backgrounds. */
  square?: boolean;
  /** Unveil the photo when it scrolls into view. */
  reveal?: boolean;
  delay?: number;
};

/**
 * The site's standard photograph: cropped with object-cover, a subtle zoom on
 * hover (of the photo itself, or of any `group` ancestor such as a card link),
 * lazy-loaded unless `preload` is set.
 */
export function Photo({ media, className, sizes, preload, label = true, square, reveal, delay }: PhotoProps) {
  const frame = (
    <div className={cn("group/photo relative overflow-hidden", className)} style={{ borderRadius: square ? 0 : PHOTO_RADIUS }}>
      <Media
        media={media}
        sizes={sizes}
        preload={preload}
        label={label}
        className="absolute inset-0 size-full transition-transform duration-[1400ms] ease-out-expo group-hover/photo:scale-[1.04] group-hover:scale-[1.04]"
      />
    </div>
  );
  if (!reveal) return frame;
  return (
    <ImageReveal radius={PHOTO_RADIUS} delay={delay}>
      {frame}
    </ImageReveal>
  );
}
