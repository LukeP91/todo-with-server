import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {
  render() {
    const { todo } = this.props
    const { toggleTodo } = this.props

    return <div onClick={() => toggleTodo(todo.id)}>{todo.description}</div>
  }
}

Todo.propTypes = {
  todo: PropTypes.Object,
  toggleTodo: PropTypes.func,
}
