import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from '../share-feedback/home/Home'
import MultipleChoice from '../share-feedback/questions/multiple-choice/MultipleChoice'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <main>
        <Route path="/home" component={Home} />
        <Route path="/feedback" component={MultipleChoice} />
      </main>
    )
  }
}

export default Main
