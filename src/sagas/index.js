import { take, call, put, fork } from 'redux-saga'
import * as types from '../constants/ActionTypes'
import * as actions from '../actions'
import { delay } from '../services/delay'

function defaultActionValue (val) {
  if (val) {
    return val
  } else {
    return {}
  }
}

export function * delayIncrement (getState) {
  while (true) {
    let { timeout } = defaultActionValue(yield take(types.DELAY_INCREMENT))
    yield call(delay, timeout)
    yield put(actions.increment())
  }
}

export default function * root (getState) {
  yield fork(delayIncrement, delayIncrement)
}
