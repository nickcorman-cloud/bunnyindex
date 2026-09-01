/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/cruelty-free',
        destination: '/the-label',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
