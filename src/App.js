import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Main />
          <Footer />
        </Fragment>
      </Router>
    )
  }
}

export default App
