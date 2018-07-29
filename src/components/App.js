import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todosActionCreators } from '../action_creators/todosActionCreators'
import PropTypes from 'prop-types'
import Title from './Title'
import List from './List'
import Input from './Input'

const mapStateToProps = state => ({
  todos: state.todos,
})
class App extends Component {
  onAddTodo = text => {
    const { dispatch } = this.props

    dispatch(todosActionCreators.add(text))
  }

  toggleTodo = i => {
    const { dispatch } = this.props

    dispatch(todosActionCreators.toggle(i))
  }

  removeTodo = i => {
    const { dispatch } = this.props

    dispatch(todosActionCreators.remove(i))
  }

  render() {
    const { todos } = this.props

    return (
      <div className="App">
        <Title title="Todo App" />
        <Input onSubmitEditing={this.onAddTodo} placeholder={'Type a todo, than hit enter!'} />
        <List removeTodo={this.removeTodo} todos={todos} toggleTodo={this.toggleTodo} />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.Array,
  dispatch: PropTypes.func,
}

export default connect(mapStateToProps)(App)
