/* global describe */
/* global it */

import { expect } from 'chai'
import * as actions from '.'
import * as types from '../constants/ActionTypes'

describe('ACTIONS', () => {
  it('should create an action delayIncrement', () => {
    const timeout = 'timeout'
    const expectedAction = {
      type: types.DELAY_INCREMENT,
      timeout
    }
    expect(actions.delayIncrement(timeout)).to.eql(expectedAction)
  })

  it('should create an action increment', () => {
    const expectedAction = {
      type: types.INCREMENT
    }
    expect(actions.increment()).to.eql(expectedAction)
  })
})
