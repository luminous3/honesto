import { UPDATE_FEEDBACK, UPDATE_CURRENT } from '../actions'

import person1 from './images/person1.png'
import person2 from './images/person2.png'
import person3 from './images/person3.png'
import person4 from './images/person4.png'
import person5 from './images/person5.png'

const initialState = {
  current: 0,
  list: [
    {
      id: 1,
      name: 'Chris Johnson',
      avatar: person1,
      feedback: [],
      complete: false,
    },
    {
      id: 2,
      name: 'Nico Perez',
      avatar: person2,
      feedback: [],
      complete: false,
    },
    {
      id: 3,
      name: 'Nathaniel Moon',
      avatar: person3,
      feedback: [],
      complete: false,
    },
    {
      id: 4,
      name: 'Denis Denison',
      avatar: person4,
      feedback: [],
      complete: true,
    },
    {
      id: 5,
      name: 'Paul Carter',
      avatar: person5,
      feedback: [],
      complete: true,
    },
  ],
}

const people = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT:
      return { ...state, current: action.payload.id }
    case UPDATE_FEEDBACK:
      let person = Object.assign({}, state.people[state.current])
      person.feedback = action.payload
      return state.map(
        person => (person.id === action.payload.id ? { ...person, feeedback: action.payload.feedback } : person),
      )
    default:
      return state
  }
}

export default people
