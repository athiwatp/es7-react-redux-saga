import * as types from '../constants/ActionTypes'

export function delayIncrement (timeout) {
  return { type: types.DELAY_INCREMENT, timeout }
}

export function increment () {
  return { type: types.INCREMENT }
}
