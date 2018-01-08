import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  observer,
  inject
} from 'mobx-react'

@inject("appState")
@observer
class TopicList extends Component {

  componentDidMount() {
    let a = 1
    console.log(this.props.appState, a)
  }


  render() {
    return (
      <div>
        TopicList
        <p>
          123 { this.props.appState.Msg }
        </p>
      </div>
    );
  }
}

TopicList.propTypes = {
  appState: PropTypes.object.isRequired
}

export default TopicList;
