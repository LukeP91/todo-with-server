import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { add } from '../action_creators/todosActionCreators'

class Input extends Component {
  state = {
    value: '',
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleKeyPress = e => {
    if (e.key !== 'Enter') return

    const { add } = this.props
    const { value } = this.state

    if (!value) return

    add(value)
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

const mapDispatchToProps = {
  add,
}

export default connect(
  null,
  mapDispatchToProps,
)(Input)

Input.propTypes = {
  placeholder: PropTypes.string,
  add: PropTypes.func,
}
