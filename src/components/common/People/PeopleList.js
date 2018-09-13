import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { updateCurrent } from '../../../state/actions'
import { Button, FillButton } from '../Button'
import './PeopleList.css'

const PeopleList = ({ home, people }) => {
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
                <FillButton>
                  <Link to="/multiple-choice">Fill Out</Link>
                </FillButton>
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

const mapDispatchToProps = dispatch => ({
  updateCurrent: id => dispatch(updateCurrent(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)
