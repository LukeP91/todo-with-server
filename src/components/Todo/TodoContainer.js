import _ from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

import { fetchLabels } from '../../store/reducers/labels/actions'
import { fetchUsers } from '../../store/reducers/users/actions'
import { toggleTodo, removeTodo, editTodo } from '../../store/reducers/todos/actions'
import TodoDetails from './TodoDetails'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

class TodoContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers('http://localhost:3001/users', { method: 'GET' })
    this.props.fetchLabels('http://localhost:3001/labels', { method: 'GET' })
  }

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

  updateTodo = values => {
    const { editTodo, match } = this.props
    editTodo(`http://localhost:3001/todos/${match.params.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
  }

  render() {
    const { todos, classes, match, labels, users } = this.props
    const todo = _.find(todos, { id: parseInt(match.params.id, 10) })
    if (todo) {
      return (
        <TodoDetails
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
          labels={labels}
          todo={todo}
          updateTodo={this.updateTodo}
          users={users}
        />
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
  todos: state.todos.todos,
  users: state.users.users,
  labels: state.labels.labels,
})

const mapDispatchToProps = {
  fetchLabels,
  fetchUsers,
  removeTodo,
  toggleTodo,
  editTodo,
}

TodoContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchLabels: PropTypes.func,
  fetchUsers: PropTypes.func,
  history: PropTypes.object,
  match: PropTypes.object.isRequired,
  labels: PropTypes.array,
  removeTodo: PropTypes.func,
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  users: PropTypes.array,
  editTodo: PropTypes.func,
}

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(TodoContainer),
  ),
)
