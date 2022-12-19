const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  async redirects() {
    return [
        {
            source: "/Home",
            destination: "/",
            permanent: true
        }
    ]
},}

module.exports = nextConfig
