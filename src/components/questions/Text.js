import React, { Component } from 'react'

import Title from '../common/Title'
import Question from './Question'
import './Text.css'

class Text extends Component {
  render() {
    return (
      <div className="text">
        <Title>
          Have there been any situations where this person could have managed their emotions better? What happened?
        </Title>
        <Question>
          <textarea placeholder="Say something" />
        </Question>
      </div>
    )
  }
}

export default Text
