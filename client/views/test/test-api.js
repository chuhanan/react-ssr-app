import React, { Component } from 'react';
import axios from 'axios'

const baseUrl = "https://cnodejs.org/api/v1"

class TestApi extends Component {

  onLogin = () => {
    axios.post(`/api/user/login`, {
      accesstoken: ""
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log('err', err)
    })
  }

  getTopics = () => {
    axios.get('/api/topics')
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log('err', err)
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopics}>获取评论</button>
        <button onClick={this.onLogin}>登录</button>
      </div>
    );
  }
}

export default TestApi;
