import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Title from '../common/Title'

import './Report.css'

const Report = ({ user }) => {
  const { feedback } = user
  console.log(user.feedback)
  return (
    <div className="report">
      <Title>Feedback for: {user.name}</Title>
      <ul className="report-content">{feedback.map(f => <li>f.data</li>)}</ul>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const { userId } = props.match.params
  return {
    user: state.people.list.find(p => p.id === parseInt(userId, 10)),
  }
}

export default connect(mapStateToProps)(withRouter(Report))
