// export const UPDATE_CURRENT = 'UPDATE_CURRENT'
export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK'
// export const INCREASE = 'INCREASE'
// export const DECREASE = 'DECREASE'

// questions
// export const next = () => ({ type: INCREASE })
// export const previous = () => ({ type: DECREASE })

// people
export const updateFeedback = (id, feedback) => ({ type: UPDATE_FEEDBACK, payload: { id, feedback } })
// export const updateCurrent = id => ({ type: UPDATE_CURRENT, id })
