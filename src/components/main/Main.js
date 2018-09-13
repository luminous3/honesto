import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from '../home/Home'
import MultipleChoice from '../questions/MultipleChoice'
import Text from '../questions/Text'

import './Main.css'

class Main extends Component {
  render() {
    return (
      <main>
        <Route path="/home" component={Home} />
        <Route path="/text" component={Text} />
        <Route path="/multiple-choice" component={MultipleChoice} />
      </main>
    )
  }
}

export default Main
