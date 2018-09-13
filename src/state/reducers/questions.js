import { INCREASE, DECREASE } from '../actions'

const initialState = {
  current: 0,
  list: [
    {
      id: 1,
      value: 'How much do you trust this person to deliver high quality work?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a euismod dolor, non blandit nisl. Sed euismod enim in semper consectetur. Duis elementum venenatis finibus. Sed quis neque diam. Aliquam nec blandit mi, et cursus dolor. Duis pharetra purus nunc, in facilisis ex auctor id. ',
      type: 'scale',
      skip: false,
    },
    {
      id: 2,
      value: 'Is this person up to date with the latest accounting regulations?',
      type: 'multiple',
      skip: false,
      options: [
        'Not fully. You should work on trying to stay more up to date with regulations',
        'Yes, you are reasonably up to date with new regulations.',
        'Yes, you are the one I look up to when I need information about new regulations',
      ],
    },
    {
      id: 3,
      value: 'How well does this person understand the technical domain of our product?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a euismod dolor, non blandit nisl. Sed euismod enim in semper consectetur. Duis elementum venenatis finibus. Sed quis neque diam. Aliquam nec blandit mi, et cursus dolor. Duis pharetra purus nunc, in facilisis ex auctor id. ',
      type: 'scale',
      skip: false,
    },
    {
      id: 4,
      value:
        'Have there been any situations where this person could have managed their emotions better? What happened?',
      type: 'text',
      skip: true,
    },
    {
      id: 5,
      value: 'Does this person care about our users and treats customer support as a high priority?',
      type: 'multiple',
      skip: false,
      options: [
        'Not always - you should work on this aspect',
        'Yes, you go out of our way to help our users and improve their experience',
        'Yes, your understanding of our users and the empathy you demonstrate is second to none',
      ],
    },
    {
      id: 6,
      value:
        'What would you like this person to work on the most during the next month, to enable their continued growth?',
      type: 'text',
      skip: false,
    },
    {
      id: 7,
      value: "How transparent and clear are this person's plans and work tasks?",
      type: 'multiple',
      skip: false,
      options: [
        'I frequently not know what you are working on, please work with me to raise visibility',
        'I almost always know what you are working on, but not always the details or next steps, only the outcomes you are after.',
        'Your plans are clear and readily available to those around you, and I always know what the next step is.',
      ],
    },
    {
      id: 8,
      value: 'How well does this person understand our business goals and roadmap?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a euismod dolor, non blandit nisl. Sed euismod enim in semper consectetur. Duis elementum venenatis finibus. Sed quis neque diam. Aliquam nec blandit mi, et cursus dolor. Duis pharetra purus nunc, in facilisis ex auctor id. ',
      type: 'scale',
      skip: false,
    },
    {
      id: 9,
      value: "Is there anything else you'd like to share with this person?",
      type: 'text',
      skip: true,
    },
  ],
}

const questions = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      let newCurrent = state.current === state.questions.length - 1 ? 0 : state.current + 1
      return { ...state, current: newCurrent }
    case DECREASE:
      newCurrent = state.current === 0 ? state.current : state.current - 1
      return { ...state, current: newCurrent }
    default:
      return state
  }
}

export default questions
