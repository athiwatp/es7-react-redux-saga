import { expect } from 'chai'
import reducer from './counter'
import * as types from '../constants/ActionTypes'

describe('REDUCER counter', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).eql(0)
  })

  it('should return increment counter', () => {
    expect(
      reducer(0, {type: types.INCREMENT})
    ).eql(1)
  })

  it('should return increment counter', () => {
    expect(
      reducer(20, {type: types.INCREMENT})
    ).eql(21)
  })
})
