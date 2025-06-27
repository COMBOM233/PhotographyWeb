const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json']
    }
  },
  lintOnSave: false  // 禁用保存时的 lint 检查
})
