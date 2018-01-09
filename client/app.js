// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import App from './views/App'
//热更新需要的包装的组件
import { AppContainer } from 'react-hot-loader'
import AppState from './store/app-state'

const initialState = window.__INITIAL_STATE__ || {}  //eslint-disable-line

const render = (Component) => {
  ReactDom.hydrate(
    <AppContainer>
      <Provider appState={new AppState(initialState)}>
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
