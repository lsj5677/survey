/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STAGE: process.env.STAGE,
  }
}

module.exports = nextConfig
