import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggle, remove } from '../action_creators/todosActionCreators'

let Todo = props => {
  return (
    <div>
      <div onClick={() => props.toggle(props.todo.id)}>{props.todo.description}</div>
      <button onClick={() => props.remove(props.todo.id)}>X</button>
    </div>
  )
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
