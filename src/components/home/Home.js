import React, { Component } from 'react'

import Title from '../common/Title'
import PeopleList from '../common/People/PeopleList'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="feedback-home">
        <Title>Share Feedback</Title>
        <div className="home-content">
          <PeopleList home />
        </div>
      </div>
    )
  }
}

export default Home
