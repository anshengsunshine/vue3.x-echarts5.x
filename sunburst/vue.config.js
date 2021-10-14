const path = require('path');

module.exports = {
  // eslint-loader 是否在保存的时候检查
  runtimeCompiler: true,
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : './',
  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  lintOnSave: false,
  productionSourceMap: false,
  // chainWebpack: (config) => {
  //   config.plugin('html')
  //     .tap(args => {
  //       args[0].title = "浙江省产品质量安全风险监测大屏";
  //       return args;
  //     })
  // },
  // devServer: {
  //   open: true,
  //   host: "0.0.0.0",
  //   https: false,
  //   hotOnly: false,
  //   proxy: {
  //     '/api': {
  //       target: "http://zjzaytest.zhiweidata.net/api/",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": ""
  //       }
  //     }
  //   }
  // }
}
