import React, { Component } from 'react'
import times from 'lodash/times'
import { connect } from 'react-redux'

import { updateFeedback } from '../../state/actions'
import Title from '../common/Title'
import QuestionContainer from './QuestionContainer'
import './Scale.css'

const MAX = 10

class Scale extends Component {
  constructor(props) {
    super(props)

    const feedback = props.user.feedback.find(f => f.id === props.question.id)
    this.state = {
      current: feedback.data || 0,
      value: feedback.data || 0,
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

  save = index => {
    this.setState({ value: index })
    this.props.update(index)
  }

  unit = ({ filled, index }) => {
    return (
      <li
        key={'scale' + index}
        onMouseOver={() => this.onHover(index)}
        onMouseLeave={() => this.reset()}
        onClick={() => this.save(index)}
        className={filled ? 'filled' : ''}
      />
    )
  }

  displayUnits = () => {
    return times(MAX, index => this.unit({ filled: index <= this.state.current ? true : false, index }))
  }

  render() {
    const { question } = this.props

    return (
      <div className="scale">
        <Title>{question.value}</Title>
        <QuestionContainer>
          <p className="scale-content">{question.content}</p>
          <ul className="measures">
            <li>Not At All</li>
            <li>Very Much</li>
          </ul>
          <ul className="scale-list">{this.displayUnits()}</ul>
        </QuestionContainer>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const { user, question } = props
  return {
    update: feedback =>
      dispatch(
        updateFeedback(user.id, {
          id: question.id,
          type: 'scale',
          data: feedback,
        }),
      ),
  }
}

export default connect(null, mapDispatchToProps)(Scale)
