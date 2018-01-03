// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import App from './App.jsx'
//热更新需要的包装的组件
import { AppContainer } from 'react-hot-loader'

const render = (Component) => {
  ReactDom.render(<AppContainer><Component /></AppContainer>, document.querySelector('#root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    render(App)
  })
}
