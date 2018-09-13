import React, { Component } from 'react'

import Title from '../common/Title'
import QuestionContainer from './QuestionContainer'
import './Text.css'

class Scale extends Component {
  render() {
    return (
      <div className="text">
        <Title>How well does this person understand our business goals and roadmap?</Title>
        <QuestionContainer>
          <textarea placeholder="Say something" />
        </QuestionContainer>
      </div>
    )
  }
}

export default Scale
