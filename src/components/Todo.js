import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggle, removeTodo } from '../action_creators/todosActionCreators'

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
    const { toggle, removeTodo, todo } = this.props

    return (
      <div>
        <div onClick={() => toggle(todo.id)}>{this.description()}</div>
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
  toggle,
}

export default connect(
  null,
  mapDispatchToProps,
)(Todo)

Todo.propTypes = {
  removeTodo: PropTypes.func,
  todo: PropTypes.object,
  toggle: PropTypes.func,
}
