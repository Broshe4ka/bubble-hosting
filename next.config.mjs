/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
