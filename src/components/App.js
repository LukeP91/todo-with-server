import React, { Component } from 'react'
import Title from './Title'
import TodoList from './TodoList'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Title title="Todo App" />
        <TodoList />
      </div>
    )
  }
}
