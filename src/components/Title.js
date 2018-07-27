import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  render() {
    const { title } = this.props
    return (
      <div>
        <div>{title}</div>
      </div>
    )
  }
}

Input.propTypes = {
  title: PropTypes.string,
}
