import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import avatar from './avatar.png'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="title">
          <Link to="/home">Honesto</Link>
        </h1>

        <ul className="header-menu">
          <li>
            <Link to="/home">Share Feedback </Link>
          </li>
          <li>
            <Link to="/home">My Feedback </Link>
          </li>
          <li>
            <Link to="/home">Team Feedback </Link>
          </li>
          <li>
            <Link to="/home">Teams</Link>
          </li>
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
    )
  }
}

export default Header
