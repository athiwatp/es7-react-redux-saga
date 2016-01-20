import 'babel-polyfill'
import { expect } from 'chai'
import { take, call, put } from 'redux-saga'
import * as saga from './index'
import * as types from '../constants/ActionTypes'
import { delay } from '../services/delay'
import * as actions from '../actions'

const sellsukiStoreData = {
  access_token: '123456'
}
const state = { sellsukiStoreData }
const getState = () => state

describe('SAGA delayIncrement', () => {
  const iterator = saga.delayIncrement(getState)
  let actual
  let expected

  it('should wait for next DELAY_INCREMENT action', () => {
    actual = iterator.next().value
    expected = take(types.DELAY_INCREMENT)
    expect(expected).eql(actual)
  })

  it('should delay', () => {
    let timeout
    actual = iterator.next().value
    expected = call(delay, timeout)
    expect(expected).eql(actual)
  })

  it('should dispatch increment action', () => {
    actual = iterator.next().value
    expected = put(actions.increment())
    expect(expected).eql(actual)
  })
})
