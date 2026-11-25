"use client";

import { useLenis } from "lenis/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Media, loaderFor } from "@/components/ui/Media";
import { Photo } from "@/components/ui/Photo";
import type { Shot } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * Responsive photo grid (uniform tiles) that opens a lightbox. The lightbox is
 * a native <dialog>, so focus is trapped, Esc closes it, and focus returns to
 * the tile that opened it. Arrow keys move between photos.
 */
export function Gallery({ shots, className }: { shots: Shot[]; className?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lenis = useLenis();
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [open, lenis]);

  const step = useCallback(
    (by: number) => setIndex((i) => (i === null ? i : (i + by + shots.length) % shots.length)),
    [shots.length],
  );

  const current = index === null ? null : shots[index];

  return (
    <>
      <ul className={cn("grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4", className)}>
        {shots.map((shot, i) => (
          <li key={`${shot.media.alt}-${i}`}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View larger: ${shot.media.alt}`}
              className="group block w-full cursor-zoom-in text-left"
            >
              <Photo
                media={shot.media}
                label={false}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="aspect-[4/5]"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        onClose={() => setIndex(null)}
        onClick={(event) => event.target === event.currentTarget && setIndex(null)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        className="fixed inset-0 m-0 size-full max-h-none max-w-none border-0 bg-transparent p-0 text-paper backdrop:bg-ink/95"
      >
        {current && (
          <div className="flex size-full flex-col items-center justify-center gap-4 px-4 py-6 md:px-16">
            <div className="relative h-[72svh] w-full max-w-6xl">
              {current.media.src ? (
                <Image
                  key={current.media.src}
                  src={current.media.src}
                  alt={current.media.alt}
                  fill
                  sizes="100vw"
                  loader={loaderFor(current.media.src)}
                  className="object-contain"
                />
              ) : (
                <Media media={current.media} className="size-full" />
              )}
            </div>
            <p className="max-w-xl text-center text-sm text-paper/80">
              {current.caption ?? current.media.alt}
              <span className="ml-3 tabular-nums text-paper/50">
                {(index ?? 0) + 1} / {shots.length}
              </span>
            </p>
            {shots.length > 1 && (
              <>
                <LightboxButton label="Previous photo" onClick={() => step(-1)} className="left-2 top-1/2 -translate-y-1/2 md:left-6">
                  ←
                </LightboxButton>
                <LightboxButton label="Next photo" onClick={() => step(1)} className="right-2 top-1/2 -translate-y-1/2 md:right-6">
                  →
                </LightboxButton>
              </>
            )}
            <LightboxButton label="Close viewer" onClick={() => setIndex(null)} className="right-2 top-2 md:right-6 md:top-6">
              ✕
            </LightboxButton>
          </div>
        )}
      </dialog>
    </>
  );
}

function LightboxButton({
  label,
  onClick,
  className,
  children,
}: {
  label: string;
  onClick: () => void;
  className?: string;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "absolute flex size-11 items-center justify-center rounded-full border border-paper/30 text-lg transition-colors hover:bg-paper hover:text-ink",
        className,
      )}
    >
      {children}
    </button>
  );
}
