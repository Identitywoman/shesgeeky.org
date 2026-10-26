/** @type {import('next').NextConfig} */
// BASE_PATH is set by the deploy workflow. It is "/shesgeeky.org" while the site
// lives at the GitHub preview address, and empty once shesgeeky.org points here.
const basePath = process.env.BASE_PATH || ''

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
