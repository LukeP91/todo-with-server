import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggle, remove } from '../action_creators/todosActionCreators'

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
    const { toggle, remove, todo } = this.props

    return (
      <div>
        <div onClick={() => toggle(todo.id)}>{this.description()}</div>
        <button onClick={() => remove(todo.id)}>X</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  remove,
  toggle,
}

export default connect(
  null,
  mapDispatchToProps,
)(Todo)

Todo.propTypes = {
  remove: PropTypes.func,
  todo: PropTypes.object,
  toggle: PropTypes.func,
}
