/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basepath: '/anteater-electric',
  assetPrefix: '/anteater-electric/',
  trailingSlash: true,
}

module.exports = nextConfig;

