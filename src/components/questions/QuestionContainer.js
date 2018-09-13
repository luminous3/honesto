import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateFeedback } from '../../state/actions'

import { Button } from '../common/Button'

import './QuestionContainer.css'

const QuestionContainer = ({ children }) => {
  return (
    <div className="question-wrapper">
      {children}
      <nav className="question-nav">
        <Button>
          <Link to="/home">Previous</Link>
        </Button>
        <Button fill>
          <Link to="/text">Next</Link>
        </Button>
      </nav>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  console.log(state)
}

export default connect(mapStateToProps)(QuestionContainer)
