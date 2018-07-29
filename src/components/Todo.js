import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggle } from '../action_creators/todosActionCreators'

let Todo = props => {
  return <div onClick={() => props.toggle(props.todo.id)}>{props.todo.description}</div>
}

const mapDispatchToProps = {
  toggle,
}

Todo = connect(
  null,
  mapDispatchToProps,
)(Todo)

export default Todo

Todo.propTypes = {
  todo: PropTypes.Object,
  toggle: PropTypes.func,
}
