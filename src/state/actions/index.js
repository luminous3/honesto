export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK'
export const CLEAR_FEEDBACK = 'CLEAR_FEEDBACK'

export const updateFeedback = (id, feedback) => ({ type: UPDATE_FEEDBACK, payload: { id, feedback } })
export const clearFeedback = () => ({ type: CLEAR_FEEDBACK })
