const path = require('path')
//合并webpack配置
const webpackMerge = require('webpack-merge')
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config')
//生成html模板的插件,这样就不用自己写html模版了 (*^__^*)
const HTMLWebpackPlugin = require('html-webpack-plugin')
//给生产环境的模块命名 避免相互影响
const NamedAllModulesPlugin = require('name-all-modules-plugin')

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
    }),
    new HTMLWebpackPlugin({
      template: "!!ejs-compiled-loader!"+path.join(__dirname, '../client/server.template.ejs'),
      filename: "server.ejs"
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
    //页面错误404跳转到首页
    historyApiFallback: {
      index: '/public/index.html'
    },
    //本地请求代理到服务器的环境
    proxy:{
      "/api": "http://localhost:3333"
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  config.entry = {
    app: path.join(__dirname, '../client/app.js'),
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'axios',
      'prop-types',
      'mobx',
      'mobx-react'
    ]
  }
  //加上 chunkhash 之后每个 第三方的库都会有单独的 hash
  config.output.filename = '[name].[chunkhash].js'
  config.plugins.push(
    //压缩
    new webpack.optimize.UglifyJsPlugin(),
    //通用的 vendor 里面的 js 压缩
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    //非通用部分无限制压缩
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    //给每个异步加载的模块进行重新命名,互不影响
    new webpack.NamedModulesPlugin(),
    new NamedAllModulesPlugin(),
    new webpack.NamedChunksPlugin(chunk => {
      if (chunk.name) {
        return chunk.name
      }
      return chunk.mapModules(m => path.relative(m.context, m.request)).join('_')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  )
}

module.exports = config
