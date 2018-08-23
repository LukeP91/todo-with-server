import _ from 'lodash'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

import Modal from '../Form/FormModal'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  chip: {
    margin: theme.spacing.unit,
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

  userName = () => {
    const { users, todo } = this.props
    const user = _.find(users, { id: todo.userId })
    return user ? user.name : ''
  }

  labels = () => {
    const { todo, labels, classes } = this.props
    return labels
      .filter(label => _.includes(todo.labelsIds, label.id))
      .map(label => <Chip className={classes.chip} key={label.id} label={label.value} />)
  }

  render() {
    const { todo, classes, completeTodo, deleteTodo, updateTodo } = this.props
    return (
      <Paper className={classes.paper}>
        <Typography align="left" gutterBottom variant="display1">
          {todo.title}
        </Typography>
        <Typography align="left" gutterBottom variant="body1">
          {todo.description}
        </Typography>
        <Typography align="left" gutterBottom variant="body1">
          {todo.completed ? 'Status: Completed' : 'Status: Open'}
        </Typography>
        <Typography align="left" gutterBottom variant="body1">
          {this.userName(todo) ? `User: ${this.userName()}` : 'No user assigned'}
        </Typography>
        <div>{todo.labelsIds ? this.labels() : null}</div>
        <Button color="primary" onClick={() => completeTodo(todo)}>
          {todo.completed ? 'Reopen' : 'Complete'}
        </Button>
        <Modal
          buttonLabel="Edit"
          color="primary"
          initialValues={{
            title: todo.title,
            description: todo.description,
            userId: todo.userId,
            labelsIds: todo.labelsIds,
          }}
          submit={values => {
            updateTodo(values)
            this.handleClose()
          }}
          variant="default"
        />
        <Button color="secondary" onClick={() => deleteTodo(todo.id)}>
          Delete
        </Button>
      </Paper>
    )
  }
}

TodoDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  completeTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  labels: PropTypes.array,
  todo: PropTypes.object.isRequired,
  updateTodo: PropTypes.func,
  users: PropTypes.array,
}

export default withRouter(withStyles(styles)(TodoDetails))
