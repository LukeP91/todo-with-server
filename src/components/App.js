import React, { Component } from 'react'
import Title from './Title'
import List from './List'
import Input from './Input'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Title title="Todo App" />
        <Input placeholder={'Type a todo, than hit enter!'} />
        <List />
      </div>
    )
  }
}
