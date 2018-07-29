import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  state = {
    value: '',
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleKeyPress = e => {
    if (e.key !== 'Enter') return

    const { onSubmitEditing } = this.props
    const { value } = this.state

    if (!value) return

    onSubmitEditing(value)
    this.setState({ value: '' })
  }

  render() {
    const { placeholder } = this.props
    const { value } = this.state

    return (
      <input
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        placeholder={placeholder}
        type={'text'}
        value={value}
      />
    )
  }
}

Input.propTypes = {
  placeholder: PropTypes.String,
  onSubmitEditing: PropTypes.func,
}
