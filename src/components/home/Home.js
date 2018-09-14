import React, { Component } from 'react'

import Title from '../common/Title'
import PeopleList from './PeopleList'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="feedback-home">
        <Title>Share Feedback</Title>
        <div className="home-content">
          <PeopleList />
        </div>
      </div>
    )
  }
}

export default Home
