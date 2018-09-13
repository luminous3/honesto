import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateFeedback } from '../../state/actions'
import Title from '../common/Title'
import QuestionContainer from './QuestionContainer'
import './Multiple.css'

class Multiple extends Component {
  displayOptions = options => {
    return options.map((option, index) => (
      <li onClick={() => this.props.update(option)} key={`option${index}`}>
        <p>{option}</p>
      </li>
    ))
  }

  render() {
    const { question } = this.props
    return (
      <div className="multiple-choice">
        <Title>{question.value}</Title>
        <QuestionContainer>{this.displayOptions(question.options)}</QuestionContainer>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const { user, question } = props
  return {
    update: feedback =>
      dispatch(
        updateFeedback(user.id, {
          q_id: question.id,
          type: 'multiple',
          data: feedback,
        }),
      ),
  }
}

export default connect(null, mapDispatchToProps)(Multiple)
