import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../action_creators/todosActionCreators'

class Todo extends Component {
  description = () => {
    const { todo } = this.props

    if (todo.completed) {
      return (
        <div>
          <p>
            <b>
              <strike>{todo.title}</strike>
            </b>
          </p>
          <p>{'Description: ' + todo.description}</p>
        </div>
      )
    } else {
      return (
        <div>
          <p><b>{todo.title}</b></p>
          <p>{'Description: ' + todo.description}</p>
        </div>
      )
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
