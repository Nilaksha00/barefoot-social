import { Photo } from "@/components/ui/Photo";
import { Tbc } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import type { Showcase } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * Image-led grid of dishes or drinks: photo, name, description and, only when
 * real menu data exists, a price. Entries flagged `placeholder` are labelled so
 * they can never be mistaken for the real menu.
 */
export function ShowcaseGrid({ items, columns = 4 }: { items: Showcase[]; columns?: 3 | 4 }) {
  return (
    <ul className={cn("grid gap-x-4 gap-y-16", columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3")}>
      {items.map((item, i) => (
        <li key={item.name} className={cn("group", i % 2 === 1 && (columns === 4 ? "lg:mt-12" : "md:mt-12"))}>
          <Reveal delay={(i % 4) * 0.08} y={20}>
            <Photo
              media={item.media}
              label={false}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="aspect-[4/5]"
            />
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3 className="text-xl uppercase tracking-wide">{item.name}</h3>
              {item.price && <span className="text-sm tabular-nums">{item.price}</span>}
            </div>
            <p className="mt-2 max-w-[34ch] text-base leading-relaxed text-mute">{item.description}</p>
            {item.placeholder && (
              <p className="mt-3">
                <Tbc>Placeholder</Tbc>
              </p>
            )}
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
