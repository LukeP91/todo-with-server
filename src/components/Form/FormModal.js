import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'
import React from 'react'

import { addTodo } from '../../store/reducers/todos/actions'
import Form from './FormComponent'

function getModalStyle() {
  return {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
  },
})

class SimpleModal extends React.Component {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  submit = (values, actions) => {
    const { addTodo } = this.props

    addTodo('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    actions.resetForm()
    this.handleClose()
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Button
          aria-label="Add"
          className={classes.fab}
          color="primary"
          onClick={this.handleOpen}
          variant="fab"
        >
          <AddIcon />
        </Button>
        <Modal
          aria-describedby="simple-modal-description"
          aria-labelledby="simple-modal-title"
          onClose={this.handleClose}
          open={this.state.open}
        >
          <div className={classes.paper} style={getModalStyle()}>
            <Form
              handleClose={this.handleClose}
              initialValues={{ title: '', description: '', userId: '' }}
              submit={this.submit}
            />
          </div>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addTodo,
}

SimpleModal.propTypes = {
  addTodo: PropTypes.func,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps,
  )(SimpleModal),
)
