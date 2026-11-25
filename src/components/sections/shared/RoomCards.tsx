import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import type { Room } from "@/types/content";
import { slugify } from "@/lib/utils";

/** Three minimal room cards in a row: photo, title, one line and a link to the room on the Stay page. */
export function RoomCards({ rooms }: { rooms: Room[] }) {
  return (
    <ul className="grid gap-x-4 gap-y-12 md:grid-cols-3">
      {rooms.map((room, i) => (
        <li key={room.name}>
          <Reveal delay={i * 0.1} y={20}>
            <Link href={`/stay#${slugify(room.name)}`} className="group block">
              <Photo
                media={room.media}
                label={false}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-[4/3]"
              />
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-2xl uppercase tracking-wide">{room.name}</h3>
                <span className="text-[11px] font-medium uppercase tracking-wide-plus text-mute">{room.kind}</span>
              </div>
              <p className="mt-2 max-w-[40ch] text-base leading-relaxed text-mute">{room.description}</p>
              <span className="link-underline mt-4 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-wide-plus">
                View room
                <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
