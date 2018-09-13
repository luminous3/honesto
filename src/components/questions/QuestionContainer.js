import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Button } from '../common/Button'
import './QuestionContainer.css'

const QuestionContainer = ({ children, page, user, length }) => {
  const nextUrl = page + 1 > length ? '/home' : `/questions/${user}/${page + 1}`
  const prevUrl = page - 1 <= 0 ? '/home' : `/questions/${user}/${page - 1}`

  return (
    <div className="question-wrapper">
      {children}
      <nav className="question-nav">
        <Link to={prevUrl}>
          <Button>Previous</Button>
        </Link>
        <Link to={nextUrl}>
          <Button fill>Next</Button>
        </Link>
      </nav>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    length: state.questions.list.length,
  }
}

export default connect(mapStateToProps)(QuestionContainer)
