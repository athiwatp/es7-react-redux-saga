import * as actionTypes from '../constants/ActionTypes'

export default function counter (state = 0, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1
    default:
      return state
  }
}
