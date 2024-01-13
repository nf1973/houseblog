/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/google28e1934b71ec8acc.html",
        destination: "google28e1934b71ec8acc.html",
      },
    ];
  },
};

module.exports = nextConfig;
