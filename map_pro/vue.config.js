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
}
