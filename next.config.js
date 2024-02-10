/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '154.62.109.112',
            port: '8000',
            pathname: '/media/**',
          },
        ],
      },
}

module.exports = nextConfig
