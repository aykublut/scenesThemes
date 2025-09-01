import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* diğer config seçenekleri varsa onları koru */
  eslint: {
    ignoreDuringBuilds: true, // Build sırasında ESLint hatalarını yoksayar
  },
};

export default nextConfig;
