import React, { Component } from 'react'

import Title from '../common/Title'
import PeopleList from '../common/People/PeopleList'

import './Report.css'

class Report extends Component {
  render() {
    return (
      <div className="report">
        <Title>My Feedback</Title>
        <ul className="report-content">
          <li>
            <PeopleList />
          </li>
          <li>2nd Column</li>
          <li>3rd Column</li>
        </ul>
      </div>
    )
  }
}

export default Report
