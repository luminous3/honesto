import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../common/Button'

import './Question.css'

export default ({ children }) => {
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
