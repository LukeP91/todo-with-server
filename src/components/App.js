import React, { Component } from 'react'
import Title from './Title'
import List from './List'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const mapStateToProps = state => ({
  todos: state.todos,
})
class App extends Component {
  render() {
    const { todos } = this.props

    return (
      <div className="App">
        <Title title="Todo App" />
        <List todos={todos} />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.Array,
}

export default connect(mapStateToProps)(App)
