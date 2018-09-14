import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from '../home/Home'
import Report from '../report/Report'
import QuestionList from '../questions/QuestionList'

import './Main.css'

class Main extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/reports/:userId" component={Report} />
        <Route path="/questions/:userId/:questionId" component={QuestionList} />
      </main>
    )
  }
}

export default Main
