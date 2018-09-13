import React, { Component } from 'react'

import Title from '../../common/Title'
import person1 from './person1.png'
import person2 from './person2.png'
import person3 from './person3.png'
import person4 from './person4.png'
import person5 from './person5.png'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="share-feedback-home">
        <Title>Share Feedback</Title>
        <ul className="people-list">
          <li>
            <img alt="person1.png" src={person1} />
            <span className="person-name">Chris Johnson</span>
            <div className="btn-wrapper">
              <button className="fill-out-btn">Fill Out</button>
            </div>
          </li>
          <li>
            <img alt="person2.png" src={person2} />
            <span className="person-name">Nico Perez</span>
            <div className="btn-wrapper">
              <button className="view-btn">View Submission</button>
            </div>
          </li>
          <li>
            <img alt="person3.png" src={person3} />
            <span className="person-name">Nathaniel Moon</span>
            <div className="btn-wrapper">
              <button className="view-btn">View Submission</button>
            </div>
          </li>
          <li>
            <img alt="person4.png" src={person4} />
            <span className="person-name">Denis Denison</span>
            <div className="btn-wrapper">
              <button className="view-btn">View Submission</button>
            </div>
          </li>
          <li>
            <img alt="person5.png" src={person5} />
            <span className="person-name">Paul Carter</span>
            <div className="btn-wrapper">
              <button className="view-btn">View Submission</button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
