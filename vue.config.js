module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/front-dev/'
    : '/',
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'front-dev',
    },
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
          return options
      })
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
          options.limit = -1
          return options
      })
  },
  lintOnSave: false,
}