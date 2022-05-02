const isProd = process.env.NODE_ENV == 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? 'https://react-nginx-api/': ''
}

module.exports = nextConfig
