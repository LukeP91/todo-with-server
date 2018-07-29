import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class List extends Component {
  renderTodoItem = (todo, i) => {
    const { toggleTodo } = this.props

    return <Todo index={i} key={i} todo={todo} toggleTodo={toggleTodo} />
  }
  render() {
    const { todos } = this.props

    return <div>{todos.map((todo, i) => this.renderTodoItem(todo, i))}</div>
  }
}

List.propTypes = {
  todos: PropTypes.Array,
  toggleTodo: PropTypes.func,
}
