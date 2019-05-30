let isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProduction ? '/ff11-movies' : '',
  publicRuntimeConfig: {
    // used in '/parts/PrefixedLink.js/', for more details go to the component itself
    linkPrefix: isProduction ? '/ff11-movies' : '',
  },
  exportPathMap: function(defaultPathMap) {
    return defaultPathMap
  },
}
