/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'raw.githubusercontent.com'],
  },
  disableStaticImages: true,
};

module.exports = nextConfig;
