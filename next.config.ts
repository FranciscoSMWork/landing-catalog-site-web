import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function config(phase: string): NextConfig {
  const showDesignSystem = phase === PHASE_DEVELOPMENT_SERVER
    || process.env.INCLUDE_DESIGN_SYSTEM === "true";

  return {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
    // A demonstração não participa do roteamento comercial.
    pageExtensions: showDesignSystem
      ? ["demo.tsx", "tsx", "ts", "jsx", "js"]
      : ["tsx", "ts", "jsx", "js"],
  };
}
