import { combineReducers } from 'redux'
import questions from './questions'
import people from './people'

export default combineReducers({
  questions,
  people,
})
