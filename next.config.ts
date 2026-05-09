/**
 * Next.js 14 Configuration
 * TaskMan Project Configuration
 */

import type { NextConfig } from 'next'

const config: NextConfig = {
  // Project Information
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],

  // TypeScript Configuration
  typescript: {
    ignoreBuildErrors: true,
  },

  // ESLint Configuration
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Images Configuration
  images: {
    remotePatterns: [],
  },
};

export default config;
