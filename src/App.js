import React, { Component } from 'react'
import './App.css'
import logoImage from './img/Theorem.png'
import logoIcon from './img/halmos.png'
import avatar from './img/avatar.png'

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="title">Honesto</h1>
          <ul className="header-menu">
            <li>Share Feedback</li>
            <li>My Feedback</li>
            <li>Team Feedback</li>
            <li>Teams</li>
            <li className="cycle-wrapper">
              <span className="info">Next feedback cycle:</span>
              <span className="date">
                Sept 2018 - <span className="days">4 days</span>
              </span>
            </li>
          </ul>
          <div className="login-wrapper">
            <img alt="avatar.png" src={avatar} />
            <div className="login-info">
              <span className="name">Jane Smith</span>
              <span className="logout">LOGOUT</span>
            </div>
          </div>
        </header>
        <section>
          <h1 className="share-title">Share Feedback</h1>
        </section>
        <footer>
          <span>
            <img alt="theorem.png" src={logoImage} /> <img alt="halmos.png" src={logoIcon} />
          </span>
          <div className="copyright">Copyright &copy;2018 Theorem, LLC. All rights reserved. </div>
        </footer>
      </div>
    )
  }
}

export default App
