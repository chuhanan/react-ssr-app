import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import TopicList from '../views/topic-list'
import TopicDetail from '../views/topic-detail'
import Test from '../views/test/test-api'

export default () => [
  <Route path="/" key="home" render={() => <Redirect to="/list" />} exact></Route>,
  <Route path="/list" key="list" component={TopicList} exact></Route>,
  <Route path="/detail" key="detail" component={TopicDetail}></Route>,
  <Route path="/test" key="test" component={Test}></Route>
]
