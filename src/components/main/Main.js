import React, { Component } from 'react'

import Home from '../share-feedback/home/Home'
import MultipleChoice from '../share-feedback/questions/multiple-choice/MultipleChoice'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <main>
        <MultipleChoice />
      </main>
    )
  }
}

export default Main
