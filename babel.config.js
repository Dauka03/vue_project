module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/styles/global.scss";`
      }
    }
  }
}
