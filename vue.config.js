module.exports = {
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'heykkyu.github.io',
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