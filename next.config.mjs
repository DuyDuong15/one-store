// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "one-store.oneentry.cloud",
      }
    ]
  }
};

export default nextConfig;
