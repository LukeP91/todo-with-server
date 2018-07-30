import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../action_creators/todosActionCreators'

class Input extends Component {
  state = {
    value: '',
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleKeyPress = e => {
    if (e.key !== 'Enter') return

    const { addTodo } = this.props
    const { value } = this.state

    if (!value) return

    addTodo('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: value, completed: false }),
    })
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
  addTodo,
}

export default connect(
  null,
  mapDispatchToProps,
)(Input)

Input.propTypes = {
  placeholder: PropTypes.string,
  addTodo: PropTypes.func,
}
