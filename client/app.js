// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import App from './views/App'
//热更新需要的包装的组件
import { AppContainer } from 'react-hot-loader'
import appState from './store/app-state'

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Provider appState={appState}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>, document.querySelector('#root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    render(App)
  })
}
