import React, { Component } from 'react'
import { connect } from 'react-redux'

import Title from '../common/Title'
import PeopleList from './PeopleList'
import { Button } from '../common/Button'
import { clearFeedback } from '../../state/actions'

import './Home.css'

class Home extends Component {
  clearFeedback = () => {
    const { people } = this.props
    const feedback = people.filter(p => p.feedback.length > 0)
    return feedback.length === people.length ? true : false
  }

  render() {
    return (
      <div className="feedback-home">
        {this.clearFeedback() && <Button onClick={this.props.clear}>Clear Feedback</Button>}

        <Title>Share Feedback</Title>
        <div className="home-content">
          <PeopleList />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  people: state.people.list,
})

const mapDispatchToProps = (dispatch, props) => {
  return {
    clear: feedback => dispatch(clearFeedback()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
