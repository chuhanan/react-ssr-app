// @ts-nocheck
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Routes from '../config/router'

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Link to="/">首页</Link>
        <p></p>
        <Link to="/detail">详情</Link>
        <Routes />
      </div>
    );
  }
}

export default App;
