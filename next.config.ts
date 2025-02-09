import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    dynamicIO: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default withMDX(nextConfig)
