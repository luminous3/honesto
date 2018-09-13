import React, { Component } from 'react'
import times from 'lodash/times'

import Title from '../common/Title'
import QuestionContainer from './QuestionContainer'
import './Scale.css'

const MAX = 10

class Scale extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      value: 0,
    }
  }

  onHover = index => {
    this.setState({
      current: index,
    })
  }

  reset = () => {
    this.setState({
      current: this.state.value,
    })
  }

  unit = ({ filled, index }) => {
    const { value, current } = this.state
    return (
      <li
        key={'scale' + index}
        onMouseOver={() => this.onHover(index)}
        onMouseLeave={() => this.reset()}
        onClick={() => this.setState({ value: index })}
        className={filled ? 'filled' : ''}
      />
    )
  }

  displayUnits = () => {
    return times(MAX, index => this.unit({ filled: index <= this.state.current ? true : false, index }))
  }

  render() {
    const { current } = this.state
    const { user, question } = this.props

    return (
      <div className="scale">
        <Title>{question.value}</Title>
        <QuestionContainer>
          <p className="scale-content">{question.content}</p>
          <ul className="scale-list">{this.displayUnits()}</ul>
        </QuestionContainer>
      </div>
    )
  }
}

export default Scale
