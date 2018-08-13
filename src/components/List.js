import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { fetchTodos } from '../action_creators/todosActionCreators'
import { connect } from 'react-redux'

class List extends Component {
  componentDidMount() {
    this.props.fetchTodos('http://localhost:3001/todos', { method: 'GET' })
  }

  render() {
    const { todos } = this.props

    return <div>{todos.map((todo, i) => <Todo key={i} todo={todo} />)}</div>
  }
}

const mapStateToProps = state => ({
  todos: state.todosReducer.todos,
})

const mapDispatchToProps = {
  fetchTodos,
}

List.propTypes = {
  todos: PropTypes.array,
  fetchTodos: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
