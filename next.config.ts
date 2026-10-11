import type { NextConfig } from "next";

// Static site generator, not an app: no SSR, no server actions, no middleware.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
