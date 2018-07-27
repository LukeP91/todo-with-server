import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class List extends Component {
  render() {
    const { todos } = this.props

    return <div>{todos.map((todo, i) => <Todo key={i} todo={todo} />)}</div>
  }
}

List.propTypes = {
  todos: PropTypes.Array,
}
