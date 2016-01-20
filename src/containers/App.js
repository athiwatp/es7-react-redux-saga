import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Counter from '../components/counter'

export default class App extends Component {
  render () {
    const { dispatch } = this.props
    return (
      <div className='container'>
        <div className='row'>
          <div className='column column-60'>
            <Counter value={this.props.state.counter}/>
            <button onClick={product => dispatch(actions.delayIncrement(1000))}>Increment</button>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: PropTypes.object
}

function selectState (state) {
  return {
    state: state
  }
}

export default connect(selectState)(App)
