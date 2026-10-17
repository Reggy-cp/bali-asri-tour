/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'bali-agung-tours.com',
      },
      {
        protocol: 'https',
        hostname: 'static.tacdn.com',
      },
    ],
  },
};

export default nextConfig;
