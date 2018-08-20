import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../action_creators/todosActionCreators'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import DeleteIcon from '@material-ui/icons/Delete'

class Todo extends Component {
  render() {
    const { toggleTodo, removeTodo, todo } = this.props
    let checkIcon = null
    if (todo.completed) {
      checkIcon = (
        <ListItemIcon>
          <CheckCircleIcon />
        </ListItemIcon>
      )
    }
    return (
      <ListItem button>
        {checkIcon}
        <ListItemText
          onClick={() => {
            toggleTodo(`http://localhost:3001/todos/${todo.id}`, {
              method: 'PATCH',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ completed: !todo.completed }),
            })
          }}
          primary={todo.title}
          secondary={todo.description}
        />
        <ListItemIcon
          onClick={() => {
            removeTodo(`http://localhost:3001/todos/${todo.id}`, {
              method: 'DELETE',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            })
          }}
        >
          <DeleteIcon />
        </ListItemIcon>
      </ListItem>
    )
  }
}

const mapDispatchToProps = {
  removeTodo,
  toggleTodo,
}

export default connect(
  null,
  mapDispatchToProps,
)(Todo)

Todo.propTypes = {
  removeTodo: PropTypes.func,
  todo: PropTypes.object,
  toggleTodo: PropTypes.func,
}
