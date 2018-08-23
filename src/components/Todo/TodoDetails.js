import _ from 'lodash'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

import Form from '../Form/FormComponent'

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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
            {this.userName(todo) ? `User: ${this.userName()}` : 'No user assigned'}
          </Typography>
          <Typography align="left" gutterBottom variant="body1">
            {todo.labelsIds ? this.labels() : null}
          </Typography>
          <Button color="primary" onClick={() => completeTodo(todo)}>
            {todo.completed ? 'Reopen' : 'Complete'}
          </Button>
          <Button color="primary" onClick={this.handleOpen}>
            Edit
          </Button>
          <Button color="secondary" onClick={() => deleteTodo(todo.id)}>
            Delete
          </Button>
          <Modal
            aria-describedby="simple-modal-description"
            aria-labelledby="simple-modal-title"
            onClose={this.handleClose}
            open={this.state.open}
          >
            <div className={classes.modal}>
              <Form
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
