const path = require('path')
//生成html模板的插件,这样就不用自己写html模版了 (*^__^*)
const HTMLWebpackPlugin = require('html-webpack-plugin')
//合并webpack配置
const webpackMerge = require('webpack-merge')
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config')

module.exports = webpackMerge(baseConfig, {
  //服务端渲染配置环境
  target: "node",
  entry: {
    app: path.join(__dirname, "../client/server-entry.js")
  },
  output: {
    filename: 'server-entry.js',
    path: path.join(__dirname, '../dist'),
    //资源文件路径 分辨路由 处理接口
    //如果不加后面的/会导致热更新功能失去效果哟
    publicPath: '/public/',
    //使用最新的commjs模块规范
    libraryTarget: 'commonjs2'
  },
  //在服务端打包的时候不需要打包第三方库, 只需要加载业务代码即可
  externals: Object.keys(require("../package.json").dependencies),
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
})
