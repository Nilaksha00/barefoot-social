import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/ui/icons";
import { Magnetic } from "@/components/ui/Magnetic";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-ink-soft",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  light: "bg-paper text-ink hover:bg-sand",
  "outline-light": "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Offer the linked file (e.g. a menu PDF) as a download instead of navigating to it. */
  download?: boolean;
};

/** Pill button that leans toward the cursor; its arrow slides out and back in on hover. */
export function Button({ href, children, variant = "solid", className, download }: ButtonProps) {
  const external = download || /^(https?:|mailto:|tel:)/.test(href);
  const classes = cn(
    "group inline-flex h-12 items-center gap-3 rounded-full pl-6 pr-2 text-[12px] font-medium uppercase tracking-wide-plus transition-colors duration-300",
    variants[variant],
  );
  const content = (
    <>
      <span>{children}</span>
      <span className="relative flex size-8 items-center justify-center overflow-hidden rounded-full bg-current/10">
        <ArrowUpRight className="absolute size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-5 group-hover:-translate-y-5" />
        <ArrowUpRight className="absolute size-4 -translate-x-5 translate-y-5 transition-transform duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </>
  );

  if (external) {
    return (
      <Magnetic className={className}>
        <a
          href={href}
          download={download || undefined}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className={classes}
        >
          {content}
        </a>
      </Magnetic>
    );
  }
  return (
    <Magnetic className={className}>
      <Link href={href} className={classes}>
        {content}
      </Link>
    </Magnetic>
  );
}
