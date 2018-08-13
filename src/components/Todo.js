import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../action_creators/todosActionCreators'

class Todo extends Component {
  description = () => {
    const { todo } = this.props

    if (todo.completed) {
      return <strike>{todo.description}</strike>
    } else {
      return <span>{todo.description}</span>
    }
  }

  render() {
    const { toggleTodo, removeTodo, todo } = this.props

    return (
      <div>
        <div
          onClick={() => {
            toggleTodo(`http://localhost:3001/todos/${todo.id}`, {
              method: 'PATCH',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ completed: !todo.completed }),
            })
          }}
        >
          {this.description()}
        </div>
        <button
          onClick={() => {
            removeTodo(`http://localhost:3001/todos/${todo.id}`, {
              method: 'DELETE',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            })
          }}
        >
          X
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  removeTodo,
  toggleTodo,
}

export default connect(
  null,
  mapDispatchToProps,
)(Todo)

Todo.propTypes = {
  removeTodo: PropTypes.func,
  todo: PropTypes.object,
  toggleTodo: PropTypes.func,
}
