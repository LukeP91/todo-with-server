import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {
  render() {
    const { todo } = this.props
    return <div>{todo.description}</div>
  }
}

Todo.propTypes = {
  todo: PropTypes.Object,
}
