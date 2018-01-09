//处理服务端在react异步渲染时候发生的变化更新组件
const asyncBootstrap = require('react-async-bootstrapper').default
//ejs
const ejs = require('ejs')
//serialize object
const serialize = require('serialize-javascript')
//server-side title handle
const Helmet = require('react-helmet').default
//rss
const ReactDomServer = require('react-dom/server')


const getStoreState = function(stores) {
  return Object.keys(stores).reduce((store, storeName) => {
    store[storeName] = stores[storeName].toJson()
    return store[storeName]
  }, {})
}

module.exports = function (bundle, template, req, res) {
  return new Promise((resolve, reject) => {
    const createStoreMap = bundle.createStoreMap
    const createApp = bundle.default
    const context = {}
      //创建新的store
      const stores = createStoreMap()
      const app1 = createApp(stores, context, req.url)
      //异步处理组件刷新
      asyncBootstrap(app1).then(() => {
        if(context.url){
          res.status(302).setHeader("Location", context.url)
          res.send()
          return
        }
        //获取整个state数据
        const state = getStoreState(stores)
        //拿到app渲染后的js字符串
        const str = ReactDomServer.renderToString(app1)
        //获取title
        const helmet = Helmet.rewind()
        //获取ejs渲染完成之后的完整的html
        const html = ejs.render(template, {
          appString: str,
          initialState: serialize(state),
          meta: helmet.meta.toString(),
          title: helmet.title.toString(),
          style: helmet.style.toString(),
          link: helmet.link.toString()
        })
        res.send(html)
        resolve()
        //res.send(template.replace('<!-- app -->', str))
      }).catch(reject)
  })
}
