import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Netlify specific settings
  output: "standalone",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
