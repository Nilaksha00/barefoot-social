import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-5 md:px-10", className)}>{children}</div>;
}

/** Tracked label with a small dot, used above section headings. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-[11px] font-medium uppercase tracking-brand", className)}>
      <span aria-hidden className="size-1.5 rounded-full bg-current" />
      <span className="opacity-70">{children}</span>
    </p>
  );
}
