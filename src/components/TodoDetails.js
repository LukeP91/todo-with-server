import _ from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

import { toggleTodo, removeTodo } from '../action_creators/todosActionCreators'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class TodoDetails extends Component {
  completeTodo = todo => {
    const { toggleTodo } = this.props

    toggleTodo(`http://localhost:3001/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todo.completed }),
    })
  }

  deleteTodo = id => {
    const { removeTodo, history } = this.props

    removeTodo(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    history.push({ pathname: '/' })
  }

  render() {
    const { todos, classes, match } = this.props
    const todo = _.find(todos, { id: parseInt(match.params.id) })
    if (todo) {
      return (
        <Paper className={classes.paper}>
          <Typography align="left" gutterBottom variant="display1">
            {todo.title}
          </Typography>
          <Typography align="left" gutterBottom variant="body1">
            {todo.title}
          </Typography>
          <Typography align="left" gutterBottom variant="body1">
            {todo.completed ? 'Status: Completed' : 'Status: Open'}
          </Typography>
          <Button color="primary" onClick={() => this.completeTodo(todo)}>
            {todo.completed ? 'Reopen' : 'Complete'}
          </Button>
          <Button color="secondary" onClick={() => this.deleteTodo(todo.id)}>
            Delete
          </Button>
        </Paper>
      )
    }
    return (
      <Paper className={classes.paper}>
        <Typography align="left" gutterBottom variant="display1">
          Loading...
        </Typography>
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = {
  toggleTodo,
  removeTodo,
}

TodoDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  match: PropTypes.object.isRequired,
  removeTodo: PropTypes.func,
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(TodoDetails),
  ),
)
