// @ts-nocheck
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import App from './views/App'
//热更新需要的包装的组件
import { AppContainer } from 'react-hot-loader'
//mobx store数据
import AppState from './store/app-state'
//material ui
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
//get colors
import { deepPurple400, deepOrange500, pink500 } from 'material-ui/colors'

//创建 MuiThemeProvider 的 theme 属性
const theme = createMuiTheme({
  palette: {
    primary: deepPurple400,
    accent: deepOrange500,
    secondary: pink500,
    type: "light"
  }
})

//防止客户端和服务端同事生成样式文件,在客户端如果检查到有样式文件则删除
const createApp = (TheApp) => {
  class Main extends React.Component {
    componentDidMount() {
      const jssStyle = document.querySelector("#js-server-side")
      if (jssStyle && jssStyle.parentNode) {
        jssStyle.parentNode.removeChild(jssStyle)
      }
    }
    render() {
      return <TheApp />
    }
  }
  return Main
}

//服务端返回的html中带的已有的state
const initialState = window.__INITIAL_STATE__ || {}  //eslint-disable-line

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Provider appState={new AppState(initialState.appState)}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <Component />
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    </AppContainer>, document.querySelector('#root'))
}

render(createApp(App))

if (module.hot) {
  module.hot.accept('./views/App', () => {
    // const NextApp = require('./views/App').default
    render(createApp(App))
  })
}
