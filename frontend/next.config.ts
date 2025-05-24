/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Keep this only if necessary
  },
  images: {
    domains: ['your-image-domain.com'],
    minimumCacheTTL: 60, // Add caching
  },
  experimental: {
    serverActions: true, // Enable if using Next 14+ server actions
  }
}

module.exports = nextConfig