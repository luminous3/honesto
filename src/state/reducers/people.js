import { UPDATE_FEEDBACK } from '../actions'

import person1 from './images/person1.png'
import person2 from './images/person2.png'
import person3 from './images/person3.png'
import person4 from './images/person4.png'
import person5 from './images/person5.png'

const initialState = {
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
    case UPDATE_FEEDBACK:
      return {
        ...state,
        list: state.list.map(person => {
          if (person.id === action.payload.id) {
            if (person.feedback.length) {
              return { ...person, feedback: person.feedback.push(action.payload.feedback) }
            } else {
              return { ...person, feedback: action.payload.feedback }
            }
          }
          return person
        }),
      }
    default:
      return state
  }
}

export default people
