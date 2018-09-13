import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from '../home/Home'
import Multiple from '../questions/Multiple'
import Report from '../report/Report'
import Text from '../questions/Text'
import QuestionList from '../questions/QuestionList'

import './Main.css'

class Main extends Component {
  render() {
    return (
      <main>
        <Route path="/home" component={Home} />
        <Route path="/text/:userId/:questionId" component={Text} />
        <Route path="/feedback/:userId" component={Report} />
        <Route path="/multiple-choice/:userId/:questionId" component={Multiple} />
        <Route path="/questions/:userId/:questionId" component={QuestionList} />
      </main>
    )
  }
}

export default Main
