import _ from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

import { fetchLabels } from '../store/reducers/labels/actions'
import { fetchUsers } from '../store/reducers/users/actions'
import { toggleTodo, removeTodo, editTodo } from '../store/reducers/todos/actions'
import Form from '../components/Form/FormComponent'

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
}

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  modal: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
})

class TodoDetails extends Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

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
    this.handleClose()
  }

  userName = todo => {
    const { users } = this.props
    const user = _.find(users, { id: todo.userId })
    return user ? user.name : ''
  }

  labels = labelsIds => {
    return this.props.labels
      .filter(label => _.includes(labelsIds, label.id))
      .map(label => label.value)
  }

  render() {
    const { todos, classes, match } = this.props
    const todo = _.find(todos, { id: parseInt(match.params.id, 10) })
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
          <Typography align="left" gutterBottom variant="body1">
            {this.userName(todo) ? `User: ${this.userName(todo)}` : 'No user assigned'}
          </Typography>
          <Typography align="left" gutterBottom variant="body1">
            {todo.labelsIds ? `Labels: ${this.labels(todo.labelsIds)}` : 'Labels:'}
          </Typography>
          <Button color="primary" onClick={() => this.completeTodo(todo)}>
            {todo.completed ? 'Reopen' : 'Complete'}
          </Button>
          <Button color="primary" onClick={this.handleOpen}>
            Edit
          </Button>
          <Button color="secondary" onClick={() => this.deleteTodo(todo.id)}>
            Delete
          </Button>
          <Modal
            aria-describedby="simple-modal-description"
            aria-labelledby="simple-modal-title"
            onClose={this.handleClose}
            open={this.state.open}
          >
            <div className={classes.modal} style={getModalStyle()}>
              <Form
                initialValues={{
                  title: todo.title,
                  description: todo.description,
                  userId: todo.userId,
                  labelsIds: todo.labelsIds,
                }}
                submit={this.updateTodo}
              />
            </div>
          </Modal>
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

TodoDetails.propTypes = {
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
    )(TodoDetails),
  ),
)
