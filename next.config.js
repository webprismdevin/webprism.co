/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['webprism.co','cdn.sanity.io', 'localhost'],
    formats: ['image/avif', 'image/webp']
  }
});