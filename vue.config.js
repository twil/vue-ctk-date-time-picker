const webpack = require('webpack');


module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(
        /moment[/\\]locale$/,
        /ru/
      )
    ]
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: true
    }
  },
  publicPath: './',
  lintOnSave: undefined
}
