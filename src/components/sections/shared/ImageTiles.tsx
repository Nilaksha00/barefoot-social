import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/ui/icons";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import type { Tile } from "@/types/content";
import { cn } from "@/lib/utils";

const grids = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

/** Aspect ratio per column count, so tiles stay a sensible shape from phone to desktop. */
const ratios = {
  2: "aspect-[5/4] md:aspect-[4/3]",
  3: "aspect-[5/4] md:aspect-[4/5]",
  4: "aspect-[5/4] sm:aspect-[4/5] lg:aspect-[3/4]",
} as const;

/**
 * Large photo blocks with the title and a short line set over a dark overlay.
 * A tile with an `href` is a link; without one it is a plain block. The photo
 * zooms gently on hover.
 */
export function ImageTiles({
  tiles,
  columns = 4,
  className,
}: {
  tiles: Tile[];
  columns?: keyof typeof grids;
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-6 md:gap-3", grids[columns], className)}>
      {tiles.map((tile, i) => (
        <li key={tile.title}>
          <Reveal delay={i * 0.08} y={20}>
            <TileFrame tile={tile} ratio={ratios[columns]} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

function TileFrame({ tile, ratio }: { tile: Tile; ratio: string }) {
  const inner: ReactNode = (
    <>
      <Photo
        media={tile.media}
        label={false}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className={ratio}
      />
      <span aria-hidden className="absolute inset-0 bg-ink/40 transition-colors duration-700 group-hover:bg-ink/55" />
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-paper md:p-6">
        <span>
          <span className="block text-3xl uppercase leading-none tracking-wide md:text-4xl">{tile.title}</span>
          <span className="mt-3 block max-w-[26ch] text-sm leading-snug text-paper/90">{tile.description}</span>
        </span>
        {tile.href && (
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-paper/40 transition-colors duration-500 group-hover:bg-paper group-hover:text-ink">
            <ArrowUpRight className="size-4" />
          </span>
        )}
      </span>
    </>
  );

  if (tile.href) {
    return (
      <Link href={tile.href} aria-label={`${tile.title}: ${tile.description}`} className="group relative block overflow-hidden rounded-[4px]">
        {inner}
      </Link>
    );
  }
  return <div className="group relative block overflow-hidden rounded-[4px]">{inner}</div>;
}
