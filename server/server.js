const express = require('express')
const fs = require('fs')
const path = require('path')
//用来处理接口传递的参数的形式
const bodyParser = require('body-parser')
//服务端session
const session = require('express-session')
//express中间件用来生成页面小图标
const favicon = require('serve-favicon')
//在控制台输出高亮带颜色的库
const chalk = require('chalk')
// //react支持的服务端渲染的模块
// const ReactSSR = require('react-dom/server')
const serverRender = require('./util/server-render')


const isDev = process.env.NODE_ENV === "development"
const app = express()

//处理json格式的请求
app.use(bodyParser.json())
//处理formData形式的请求
app.use(bodyParser.urlencoded({extended:false}))
//页面小图标
app.use(favicon(path.join(__dirname, '../favicon.ico')))
//session保存在内存中: 如果宕机则全部消失
app.use(session({
  maxAge: 10 * 60 * 1000,
  name: "tid",
  resave: false,
  saveUninitialized: false,
  secret: 'react cnode'
}))

//处理用户的token
app.use('/api/user', require('./util/handle-login'))
//处理其他的用户的api
app.use('/api', require('./util/proxy-api'))
//托管静态文件
app.use('/public', express.static(path.join(__dirname, '../dist')))

if (!isDev){
  //在node端打包好的react项目
  const serverEntry = require('../dist/server-entry')
  //这里为什么要用.default
  // commonjs规范处理了如果组件是 export default 出去的组件需要.de来处理 否则获取不到组件
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8')
  app.get('*', function (req, res, next) {
    serverRender(serverEntry, template, req, res).catch(next)
  })
}else{
  const devStatic = require('./util/dev-static')
  devStatic(app)
}

//有4个参数的中间件第一个是 error
app.use(function(error, req, res, next) {
  console.log(error)
  res.status(500).send(error)
})

app.listen(3333, function () {
  console.log(chalk.cyan('server has run at port 3333'))
})
