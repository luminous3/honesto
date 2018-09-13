import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Button, FillButton } from '../Button'
import './PeopleList.css'

const PeopleList = ({ home, people }) => {
  console.log(people)
  return (
    <div>
      <ul className="people-list">
        {people.map(person => (
          <li key={person.name + person.id}>
            <img alt={person.name} src={person.avatar} />
            <span className="person-name">{person.name}</span>
            {home && person.complete && <Button>View Submission</Button>}
            {home &&
              !person.complete && (
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

export default connect(mapStateToProps, null)(PeopleList)
