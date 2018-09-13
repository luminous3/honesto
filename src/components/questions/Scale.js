import React, { Component } from 'react'

import Title from '../common/Title'
import Question from './Question'
import './Text.css'

class Scale extends Component {
  render() {
    return (
      <div className="text">
        <Title>How well does this person understand our business goals and roadmap?</Title>
        <Question>
          <textarea placeholder="Say something" />
        </Question>
      </div>
    )
  }
}

export default Scale
