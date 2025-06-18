import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    loader: 'custom',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    domains: ['res.cloudinary.com'],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/assets',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '80',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
};

export default nextConfig;
