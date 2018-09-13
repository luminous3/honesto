import React, { Component, Fragment } from 'react'
import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    )
  }
}

export default App
