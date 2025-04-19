/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@gaia-air/common-ui'], // If you have shared UI components
  output: 'export', // For static export if needed
};

export default nextConfig;
