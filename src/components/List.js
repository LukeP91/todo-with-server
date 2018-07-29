import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class List extends Component {
  renderTodoItem = (todo, i) => {
    const { toggleTodo } = this.props
    const { removeTodo } = this.props

    return (
      <div>
        <Todo key={i} todo={todo} toggleTodo={toggleTodo} />
        <button onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    )
  }
  render() {
    const { todos } = this.props

    return <div>{todos.map((todo, i) => this.renderTodoItem(todo, i))}</div>
  }
}

List.propTypes = {
  todos: PropTypes.Array,
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
}
