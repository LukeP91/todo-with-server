import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {
  render() {
    const { todo } = this.props
    const { toggleTodo } = this.props
    const { index } = this.props

    return <div onClick={() => toggleTodo(index)}>{todo.description}</div>
  }
}

Todo.propTypes = {
  index: PropTypes.integer,
  todo: PropTypes.Object,
  toggleTodo: PropTypes.func,
}
