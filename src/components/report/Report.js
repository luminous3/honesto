import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Title from '../common/Title'

import './Report.css'

const Report = ({ user, questions }) => {
  const { feedback } = user
  console.log(user.feedback)
  console.log(user)
  return (
    <div className="report">
      <Title>Feedback for {user.name}</Title>
      <ul className="report-content">
        {feedback.map((f, index) => {
          const question = questions.find(q => q.id === f.id)
          return (
            <li key={f.id} className="response">
              <div className="question">{question.value}</div>
              <div className="answer">{f.data}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const { userId } = props.match.params
  return {
    user: state.people.list.find(p => p.id === parseInt(userId, 10)),
    questions: state.questions.list,
  }
}

export default connect(mapStateToProps)(withRouter(Report))
