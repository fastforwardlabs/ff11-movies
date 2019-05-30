module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ff11-movies' : '',
  exportPathMap: function(defaultPathMap) {
    return defaultPathMap
  },
}
