/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ueg9mrey4dlbouog.public.blob.vercel-storage.com"],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
