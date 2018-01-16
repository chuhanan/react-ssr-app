import React, { Component } from 'react';
import {
  observer,
  inject
} from 'mobx-react'
import Helmet from 'react-helmet'
import AppState from '../../store/app-state'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'

const styles = {
  root: {
    flex: 1,
    backgroundColor: "#F8BBD0"
  }
}

@withStyles(styles)
@inject("appState")
@observer
class TopicList extends Component {
  static contextTypes = {
    APP: PropTypes.string
  }

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
    const { classes } = this.props
    return (
      <div>
        <Helmet>
          <meta name="description" content="description" />
          <title>this is helmet</title>
        </Helmet>
        <h1 className={classes.root} color="secondary">写点什么好呢? </h1>
        <Button raised color="primary">Raised Button</Button>
        <p>
          { this.props.appState.Msg }
        </p>
      </div>
    );
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
  Msg: PropTypes.func,
  classes: PropTypes.object
}

export default TopicList;
