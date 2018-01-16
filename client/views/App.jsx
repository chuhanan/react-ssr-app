// @ts-nocheck
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Routes from '../config/router'
import PropsTypes from 'prop-types'
//mui container
import AppBar from './components/AppBar'
import Container from './components/Container'

class App extends Component {
  static childContextTypes = {
    APP: PropsTypes.string
  }

  constructor(props, context) {
    super(props, context);
  }

  getChildContext() {
    return {
      APP: "node app"
    }
  }

  render() {
    return (
      <div>
        <AppBar />
        <Container>
          <Link to="/">首页</Link>
          <Link to="/detail">详情</Link>
          <Routes />
        </Container>

      </div>
    );
  }
}

export default App;
