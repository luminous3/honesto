import React from 'react'
import { Link } from 'react-router-dom'

import { Button, FillButton } from '../Button'
import './PeopleList.css'

import person1 from './images/person1.png'
import person2 from './images/person2.png'
import person3 from './images/person3.png'
import person4 from './images/person4.png'
import person5 from './images/person5.png'

export default ({ home }) => {
  return (
    <ul className="people-list">
      <li>
        <img alt="person1.png" src={person1} />
        <span className="person-name">Chris Johnson</span>
        {home && (
          <FillButton>
            <Link to="/multiple-choice">Fill Out</Link>
          </FillButton>
        )}
      </li>
      <li>
        <img alt="person2.png" src={person2} />
        <span className="person-name">Nico Perez</span>
        {home && <Button>View Submission</Button>}
      </li>
      <li>
        <img alt="person3.png" src={person3} />
        <span className="person-name">Nathaniel Moon</span>
        {home && <Button>View Submission</Button>}
      </li>
      <li>
        <img alt="person4.png" src={person4} />
        <span className="person-name">Denis Denison</span>
        {home && <Button>View Submission</Button>}
      </li>
      <li>
        <img alt="person5.png" src={person5} />
        <span className="person-name">Paul Carter</span>
        {home && <Button>View Submission</Button>}
      </li>
    </ul>
  )
}
