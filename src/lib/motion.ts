/** Shared motion tokens so every animation on the site feels like one system. */
export const ease = [0.22, 1, 0.36, 1] as const;

export const duration = {
  fast: 0.45,
  base: 0.9,
  slow: 1.2,
} as const;

export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;
