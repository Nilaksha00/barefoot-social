"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/content/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: site.timezone,
});

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

/** Live time in Weligama — a small "we're out here" detail. */
export function LocalClock() {
  const time = useSyncExternalStore(
    subscribe,
    () => formatter.format(new Date()),
    () => null,
  );
  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {time ?? "--:--"}
    </span>
  );
}
