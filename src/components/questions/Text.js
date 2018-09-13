import React, { Component } from 'react'

import Title from '../common/Title'
import QuestionContainer from './QuestionContainer'
import './Text.css'

class Text extends Component {
  render() {
    return (
      <div className="text">
        <Title>
          Have there been any situations where this person could have managed their emotions better? What happened?
        </Title>
        <QuestionContainer>
          <textarea placeholder="Say something" />
        </QuestionContainer>
      </div>
    )
  }
}

export default Text
