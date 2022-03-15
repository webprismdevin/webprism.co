/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM();

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['webprism.co','cdn.sanity.io', 'localhost', 'framer.com', 'partners.tawk.to'],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    urlImports: [
        "https://framer.com/m/",
        "https://framerusercontent.com/",
        "https://fonts.gstatic.com/",
        "https://fonts.googleapis.com/",
        "https://ga.jspm.io/",
        "https://jspm.dev/",
        "https://cdn.jsdelivr.net/"
    ],
  },
});