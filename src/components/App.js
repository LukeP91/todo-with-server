import React, { Component } from 'react'
import Title from './Title'
import List from './List'
import TodoForm from './TodoFrom'
import PropTypes from 'prop-types'
import { addTodo } from '../action_creators/todosActionCreators'
import { connect } from 'react-redux'

class App extends Component {
  submit = values => {
    const { addTodo } = this.props

    addTodo('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
  }

  render() {
    return (
      <div className="App">
        <Title title="Todo App" />
        <TodoForm onSubmit={this.submit} />
        <List />
      </div>
    )
  }
}

const mapDispatchToProps = {
  addTodo,
}

App.propTypes = {
  addTodo: PropTypes.func,
}

export default connect(
  null,
  mapDispatchToProps,
)(App)
