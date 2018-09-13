import React, { Component } from 'react'

import logoImage from './Theorem.png'
import logoIcon from './halmos.png'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <span>
          <img alt="theorem.png" src={logoImage} /> <img alt="halmos.png" src={logoIcon} />
        </span>
        <div className="copyright">Copyright &copy;2018 Theorem, LLC. All rights reserved. </div>
      </footer>
    )
  }
}

export default Footer
