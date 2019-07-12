let isProduction = process.env.NODE_ENV === 'production' && false

module.exports = {
  assetPrefix: '',
  exportPathMap: function(defaultPathMap) {
    return defaultPathMap
  },
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  },
}
