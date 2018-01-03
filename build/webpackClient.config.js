const path = require('path')
//合并webpack配置
const webpackMerge = require('webpack-merge')
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config')
//生成html模板的插件,这样就不用自己写html模版了 (*^__^*)
const HTMLWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === "development"

let config = webpackMerge(baseConfig, {
  entry: {
    app: [path.join(__dirname, "../client/app.js")]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
})

if (isDev) {
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  }
  config.devServer = {
    //写localhost 和 127.0.0.1 都不合适
    host: '0.0.0.0',
    //启动gzip压缩
    compress: true,
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    //如果编译出现错误则会在浏览器出现错误的浮层
    overlay: {
      errors: true
    },
    //处理由于output中使用了public path引起的问题
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
