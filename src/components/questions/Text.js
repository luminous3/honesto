import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateFeedback } from '../../state/actions'
import Title from '../common/Title'
import QuestionContainer from './QuestionContainer'
import './Text.css'

class Text extends Component {
  constructor(props) {
    super(props)

    const feedback = props.user.feedback.find(f => f.id === props.question.id)

    this.state = {
      value: (feedback ? feedback.data : 0) || '',
    }
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
    this.props.update(e.target.value)
  }

  render() {
    const { question } = this.props
    return (
      <div className="text">
        <Title>{question.value}</Title>
        <QuestionContainer>
          <textarea onChange={e => this.handleChange(e)} value={this.state.value} placeholder="Say something" />
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
          id: question.id,
          type: 'text',
          data: feedback,
        }),
      ),
  }
}

export default connect(null, mapDispatchToProps)(Text)
