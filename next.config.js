const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    images: {
      domains: ['https://images.unsplash.com/photo-1661241766089-f7c0507ad16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'],
    },
    // Optimize bundle size
    swcMinify: true,
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    // Optimize chunk splitting
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Optimize client-side bundles
        config.optimization = {
          ...config.optimization,
          moduleIds: 'deterministic',
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              default: false,
              vendors: false,
              // Separate vendor chunks for better caching
              framework: {
                name: 'framework',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
                priority: 40,
                enforce: true,
              },
              chakra: {
                name: 'chakra-ui',
                chunks: 'all',
                test: /[\\/]node_modules[\\/]@chakra-ui[\\/]/,
                priority: 30,
                enforce: true,
              },
              framerMotion: {
                name: 'framer-motion',
                chunks: 'all',
                test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
                priority: 25,
                enforce: true,
              },
              commons: {
                name: 'commons',
                minChunks: 2,
                chunks: 'all',
                priority: 20,
              },
              lib: {
                name: 'lib',
                chunks: 'all',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
              },
            },
          },
        };
      }
      return config;
    },
})