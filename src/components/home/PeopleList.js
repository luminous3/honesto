import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Button, FillButton } from '../common/Button'
import './PeopleList.css'

const PeopleList = ({ people }) => {
  const isComplete = id => {
    return people.find(p => p.id === id).feedback.length > 0 ? true : false
  }

  return (
    <div>
      <ul className="people-list">
        {people.map(person => (
          <li key={person.name + person.id}>
            <img alt={person.name} src={person.avatar} />
            <span className="person-name">{person.name}</span>
            {isComplete(person.id) ? (
              <Link to={`/reports/${person.id}`}>
                <Button>View Submission</Button>
              </Link>
            ) : (
              <Link to={`/questions/${person.id}/1`}>
                <FillButton>Fill Out</FillButton>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  people: state.people.list,
})

export default connect(mapStateToProps)(PeopleList)
