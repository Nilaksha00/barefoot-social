import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Marks content the client has not supplied yet. Used instead of inventing
 * facts, so nothing made-up ever reads as real. Search the codebase for
 * `<Tbc` to find everything still waiting on content.
 */
export function Tbc({ children = "To be confirmed", className }: { children?: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-dashed border-ink/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide-plus text-mute",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** A labelled list of facts, with a placeholder for any that are still `null`. */
export function FactList({
  facts,
  className,
}: {
  facts: { label: string; value: string | null }[];
  className?: string;
}) {
  return (
    <dl className={cn("divide-y divide-line border-y border-line text-sm", className)}>
      {facts.map((fact) => (
        <div key={fact.label} className="flex items-center justify-between gap-6 py-4">
          <dt className="text-mute">{fact.label}</dt>
          <dd className="text-right">{fact.value ?? <Tbc />}</dd>
        </div>
      ))}
    </dl>
  );
}
