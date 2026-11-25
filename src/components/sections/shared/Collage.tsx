import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import type { Shot } from "@/types/content";
import { cn } from "@/lib/utils";

/** Three staggered columns, two photos each. Index into `shots` per column, plus each photo's shape. */
const columns = [
  { span: "md:col-span-5", offset: "", cells: [{ i: 0, ratio: "aspect-[4/5]", wide: true }, { i: 3, ratio: "aspect-square", wide: false }] },
  { span: "md:col-span-4", offset: "md:mt-24", cells: [{ i: 1, ratio: "aspect-[3/4]", wide: false }, { i: 4, ratio: "aspect-[4/3]", wide: true }] },
  { span: "md:col-span-3", offset: "md:mt-10", cells: [{ i: 2, ratio: "aspect-square", wide: false }, { i: 5, ratio: "aspect-[3/4]", wide: false }] },
];

/**
 * Asymmetrical photo collage for six candid moments. On desktop the columns
 * are staggered; on mobile they flow into a two-column grid. Uses the first six
 * entries in `shots`.
 */
export function Collage({ shots }: { shots: Shot[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-12 md:gap-x-4">
      {columns.map((column, c) => (
        <div key={c} className={cn("contents md:flex md:flex-col md:gap-6", column.span, column.offset)}>
          {column.cells.map((cell, n) => {
            const shot = shots[cell.i];
            if (!shot) return null;
            return (
              <figure key={cell.i} className={cn(cell.wide && "max-md:col-span-2")}>
                <Reveal delay={(c * 2 + n) * 0.06} y={24}>
                  <Photo media={shot.media} label={false} sizes="(min-width: 768px) 40vw, 100vw" className={cell.ratio} />
                  {shot.caption && (
                    <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-wide-plus text-mute">{shot.caption}</figcaption>
                  )}
                </Reveal>
              </figure>
            );
          })}
        </div>
      ))}
    </div>
  );
}
