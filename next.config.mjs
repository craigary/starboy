import withPlaiceholder from '@plaiceholder/next'
import getRedirects from './src/utils/social.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [...getRedirects()]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.pocketcasts.com',
        port: '',
        pathname: '/discover/images/200/**'
      }
    ]
  }
}

export default withPlaiceholder(nextConfig)
