import React, { Component } from 'react'

import Title from '../common/Title'
import './MultipleChoice.css'

class MultipleChoice extends Component {
  render() {
    return (
      <div className="multiple-choice">
        <Title>Is this person up to date with the latest accounting regulations?</Title>
        <ul className="multi-option-wrapper">
          <li>
            <span className="multi-low">No</span>
            <p>You should work on trying to stay more up to date with regulations.</p>
          </li>
          <li>
            <span className="multi-medium">Somewhat</span>
            <p>You are reasonably up to date with new regulations.</p>
          </li>
          <li>
            <span className="multi-high">Yes</span>
            <p>Yes, you are the one I look up to when I need information about new regulations.</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default MultipleChoice
