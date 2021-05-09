const webpack = require("webpack");
console.log(webpack.version); // 5.21.2
module.exports = {
    future: {
        webpack5: true,
    },
    images: {
        domains: ['jintana-orange-farm.s3-ap-southeast-1.amazonaws.com'],
    },
    
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    
        // Important: return the modified config
        return config
      },
};