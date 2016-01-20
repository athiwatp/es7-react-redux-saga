import React, {Component, PropTypes} from 'react'

export default class Counter extends Component {
  render () {
    return (
      <div id='Counter'>
        <h1>{this.props.value}</h1>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired
}
