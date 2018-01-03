const express = require('express')
const fs = require('fs')
const path = require('path')
//express中间件用来生成页面小图标
const favicon = require('serve-favicon')
//在控制台输出高亮带颜色的库
const chalk = require('chalk')
//react支持的服务端渲染的模块
const ReactSSR = require('react-dom/server')


const isDev = process.env.NODE_ENV === "development"
const app = express()

app.use(favicon(path.join(__dirname, '../favicon.ico')))

//托管静态文件
app.use('/public', express.static(path.join(__dirname, '../dist')))

if (!isDev){
  //在node端打包好的react项目
  const serverEntry = require('../dist/server-entry').default
  //这里为什么要用.default
  // commonjs规范处理了如果组件是 export default 出去的组件需要.de来处理 否则获取不到组件
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
  app.get('*', function (req, res) {
    const appString = ReactSSR.renderToString(serverEntry)
    res.send(template.replace('<!-- app -->', appString))
  })
}else{
  const devStatic = require('./util/dev-static')
  devStatic(app)
}

app.listen(3333, function () {
  console.log(chalk.cyan('server has run at port 3333'))
})
