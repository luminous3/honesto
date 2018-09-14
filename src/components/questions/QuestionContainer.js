import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { Button } from '../common/Button'
import './QuestionContainer.css'

class QuestionContainer extends Component {
  constructor(props) {
    super(props)

    const { questionId, userId } = this.props.match.params
    const { length } = this.props

    this.questionId = parseInt(questionId, 10)
    this.userId = parseInt(userId, 10)

    this.nextUrl = parseInt(questionId, 10) + 1 > length ? '/home' : `/questions/${userId}/${this.questionId + 1}`
    this.prevUrl = parseInt(questionId, 10) - 1 <= 0 ? '/home' : `/questions/${userId}/${this.questionId - 1}`
  }

  canContinue = () => {
    const person = this.props.people.find(p => p.id === this.userId)
    console.log(person.feedback)
    const feedback = person.feedback.find(f => f.id === this.questionId)
    return feedback
  }

  onPrev = () => {
    this.props.history.push(this.prevUrl)
  }

  onNext = () => {
    if (this.canContinue()) {
      this.props.history.push(this.nextUrl)
    }
  }

  render() {
    const { children } = this.props
    const skip = this.props.questions.find(q => q.id === this.questionId).skip

    return (
      <div className="question-wrapper">
        {children}
        <nav className="question-nav">
          <Button onClick={this.onPrev}>Previous</Button>
          {skip && <Button onClick={() => this.onNext()}>Skip</Button>}
          <Button onClick={this.onNext} fill>
            Next
          </Button>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    length: state.questions.list.length,
    questions: state.questions.list,
    people: state.people.list,
  }
}

export default connect(mapStateToProps)(withRouter(QuestionContainer))
