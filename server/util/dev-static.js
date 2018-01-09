const axios = require("axios")
const webpack = require('webpack')
const path = require('path')
const serverConfig = require('../../build/webpackServer.config')
//把输出的文件放在内存中, 加快处理速度
const MemoryFs = require('memory-fs')
//请求代理
const proxy = require('http-proxy-middleware')
const serverRender = require('./server-render')
const getTemplate = function() {
  return new Promise((res, rej) => {
    axios.get('http://localhost:8888/public/server.ejs')
      .then(response => {
        res(response.data)
      })
      .catch(rej)
  })
}

// const Module = module.constructor
const NativeModule = require('module')
const vm = require('vm')
const getModuleFormString = (bundle, filename) => {
  const m = { exports: {} }
  const wrapper = NativeModule.wrap(bundle)
  const script = new vm.Script(wrapper, {
    filename: filename,
    displayErrors: true
  })
  const result = script.runInThisContext()
  result.call(m.exports, m.exports, require, m)
  return m
}

let serverBundle

const serverCompiler = webpack(serverConfig)
//创建一个内存文件流
//因文件是用mfs读取的放在内存中,所以要代理处理文件路径
const mfs = new MemoryFs
//把webpack的输出文件指向这个流
serverCompiler.outputFileSystem = mfs
//使用webpack监听方法来判断文件变动重新编译
serverCompiler.watch({}, (err, stats) => {
  if(err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.error(err))
  stats.warnings.forEach(warnings => console.warn(warnings))
  const bundlePath = path.join(serverConfig.output.path, serverConfig.output.filename)
  const bundle = mfs.readFileSync(bundlePath, 'utf-8')
  // const m  = new Module()
  // m._compile(bundle, 'server-entry.js')
  const m = getModuleFormString(bundle, 'server-entry.js')
  //如果不用 exports 可能会没有内容
  serverBundle = m.exports
  //在 server-entry 中导出的 createStoreMap 方法
  // createStoreMap = m.exports.createStoreMap
})

module.exports = function(app) {
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))
  app.get('*', function(req, res, next){
    if(!serverBundle) {
      return res.send("webpack 正在编译...")
    }
    getTemplate().then(template => {
      return serverRender(serverBundle, template, req, res)
    }).catch(next)
  })
}
