import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default function config(phase: string): NextConfig {
  const showDesignSystem = phase === PHASE_DEVELOPMENT_SERVER
    || process.env.INCLUDE_DESIGN_SYSTEM === "true";

  return {
    ...nextConfig,
    // page.demo.tsx is ignored by commercial builds, not merely hidden.
    pageExtensions: showDesignSystem
      ? ["demo.tsx", "tsx", "ts", "jsx", "js"]
      : ["tsx", "ts", "jsx", "js"],
  };
}
