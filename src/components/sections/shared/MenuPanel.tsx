import { Button } from "@/components/ui/Button";
import { Tbc } from "@/components/ui/Placeholder";
import type { MenuGroup } from "@/types/content";
import { MenuList, Section } from "@/components/sections/shared/Blocks";

/**
 * The real menu, when there is one. Renders the menu groups from content and/or
 * a PDF download. With neither, it shows a clear "coming soon" panel rather than
 * made-up dishes or prices.
 */
export function MenuPanel({
  eyebrow = "Menu",
  title,
  groups,
  downloadUrl,
  downloadLabel,
  emptyNote,
}: {
  eyebrow?: string;
  title: string;
  groups: MenuGroup[];
  downloadUrl: string | null;
  downloadLabel: string;
  emptyNote: string;
}) {
  const hasMenu = groups.length > 0;

  return (
    <Section
      eyebrow={eyebrow}
      title={title}
      aside={downloadUrl ? <Button href={downloadUrl} download>{downloadLabel}</Button> : undefined}
    >
      {hasMenu ? (
        <MenuList groups={groups} />
      ) : (
        <div className="rounded-[var(--radius-card)] border border-dashed border-ink/25 px-6 py-14 text-center md:py-20">
          <Tbc>Menu coming soon</Tbc>
          <p className="mx-auto mt-5 max-w-md text-mute">{emptyNote}</p>
          {downloadUrl && (
            <div className="mt-8 flex justify-center">
              <Button href={downloadUrl} download>
                {downloadLabel}
              </Button>
            </div>
          )}
        </div>
      )}
    </Section>
  );
}
