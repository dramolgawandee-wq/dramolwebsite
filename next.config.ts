import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TypeScript 7 no longer exposes the legacy compiler API Next used for
  // type checking; the CLI path is the supported route.
  experimental: { useTypeScriptCli: true },
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
};

export default nextConfig;
