import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateFeedback } from '../../state/actions'
import Title from '../common/Title'
import QuestionContainer from './QuestionContainer'
import './Text.css'

class Text extends Component {
  render() {
    const { question } = this.props
    return (
      <div className="text">
        <Title>{question.value}</Title>
        <QuestionContainer>
          <textarea onChange={e => this.props.update(e.target.value)} placeholder="Say something" />
        </QuestionContainer>
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
          type: 'text',
          data: feedback,
        }),
      ),
  }
}

export default connect(null, mapDispatchToProps)(Text)
