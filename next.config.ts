/**
 * Next.js 16.1 Configuration
 * TaskMan Project Configuration
 */

import type { NextConfig } from 'next'

const config: NextConfig = {
  // Project Information
  appName: 'TaskMan',
  appVersion: '0.1.0',

  // React Configuration
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],

  // TypeScript Configuration
  typescript: {
    ignoreBuildErrors: true,
    noEmit: true,
  },
  tsconfig: {
    compilerOptions: {
      target: 'es2017',
      lib: ['es2020', 'dom', 'dom.iterable'],
    },
  },

  // ESLint Configuration
  eslint: {
    ignoreDuringBuilds: ['generated'],
  },

  // Development Configuration
  env: {
    development: {
      url: 'http://localhost:3000',
    },
    production: {
      url: 'https://yourdomain.com',
    },
  },

  // Images Configuration
  images: {
    domains: ['yourdomain.com'],
    remotePatterns: ['.*'],
  },

  // Webpack Configuration
  webpack: (config) => {
    // Extend webpack configuration for calendar-specific optimizations
    config.module.rules = {
      ...config.module.rules,
      // Add rules for calendar components
    },
  },

  // Path Aliases
  // For cleaner imports
  ...process.cwd(),
};

export default config;
