import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'
import App from './views/App'
import { createStoreMap } from '../client/store/store'
// mui config
import { JssProvider } from 'react-jss/lib'
import { MuiThemeProvider } from 'material-ui/styles'

//让mobx在服务端渲染的时候不会重复的渲染
//导致computed重复计算 内存溢出
useStaticRendering(true)

export default (stores, routerContext, sheetsRegistry, jss, theme, cgc, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <JssProvider generateClassName={cgc} sheetsRegistry={sheetsRegistry} jss={jss}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </StaticRouter>
  </Provider>
)

export { createStoreMap }
