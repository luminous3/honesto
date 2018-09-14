import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateFeedback } from '../../state/actions'
import Title from '../common/Title'
import QuestionContainer from './QuestionContainer'
import './Multiple.css'

class Multiple extends Component {
  constructor(props) {
    super(props)

    const feedback = props.user.feedback.find(f => f.id === props.question.id)
    let option = null
    if (feedback) {
      option = feedback.data.index
    }

    this.state = {
      selected: option,
    }
  }

  updateSelected = (option, index) => {
    this.setState({
      selected: index,
    })

    this.props.update({ index, option })
  }

  displayOptions = options => {
    return options.map((option, index) => (
      <li
        className={index === this.state.selected ? 'selected' : ''}
        onClick={() => this.updateSelected(option, index)}
        key={`option${index}`}
      >
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
          id: question.id,
          type: 'multiple',
          data: feedback,
        }),
      ),
  }
}

export default connect(null, mapDispatchToProps)(Multiple)
