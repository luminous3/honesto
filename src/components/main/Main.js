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
        <Route path="/home" component={Home} />
        <Route path="/report/:userId" component={Report} />
        <Route path="/questions/:userId/:questionId" component={QuestionList} />
      </main>
    )
  }
}

export default Main
