import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    // Sample photography only — remove once the client's own images live in /public.
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
};

export default nextConfig;
