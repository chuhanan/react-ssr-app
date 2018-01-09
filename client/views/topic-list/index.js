import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  observer,
  inject
} from 'mobx-react'
import Helmet from 'react-helmet'
import AppState from '../../store/app-state'

@inject("appState")
@observer
class TopicList extends Component {

  componentDidMount() {
    let a = 1
  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3333
        resolve(true)
      })
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta name="description" content="description" />
          <title>this is helmet</title>
        </Helmet>
        <h1>TopicList</h1>
        <p>
          { this.props.appState.Msg }
        </p>
      </div>
    );
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
  Msg: PropTypes.func
}

export default TopicList;
