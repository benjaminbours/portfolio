/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bbblog',
  assetPrefix: '/bbblog/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
