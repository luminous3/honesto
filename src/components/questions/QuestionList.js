import React from 'react'
import { connect } from 'react-redux'

import Text from './Text'
import Multiple from './Multiple'

import './QuestionList.css'

const QuestionList = ({ current, user }) => {
  switch (current.type) {
    case 'text':
      return <Text question={current} user={user} />
    case 'multiple':
      return <Multiple question={current} user={user} />
    default:
      return <div>Question Coming Soon</div>
  }
}

const mapStateToProps = (state, props) => {
  const { userId, questionId } = props.match.params
  return {
    user: state.people.list.find(p => p.id === parseInt(userId, 10)),
    current: state.questions.list.find(q => q.id === parseInt(questionId, 10)),
  }
}

export default connect(mapStateToProps, null)(QuestionList)
