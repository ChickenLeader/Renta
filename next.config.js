const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ["rentaserverbucket.s3.us-east-1.amazonaws.com"],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
