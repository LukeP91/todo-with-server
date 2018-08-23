import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'
import React from 'react'

import { addTodo } from '../../store/reducers/todos/actions'
import Form from './FormComponent'

const styles = theme => ({
  button: {},
  container: {
    display: 'inline',
  },
  fab: {
    bottom: theme.spacing.unit * 4,
    position: 'absolute',
    right: theme.spacing.unit * 4,
  },
  modal: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    left: '50%',
    padding: theme.spacing.unit * 4,
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.spacing.unit * 50,
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
    const { submit } = this.props
    submit(values, actions)
    this.handleClose()
  }

  render() {
    const { classes, color, buttonLabel, variant, fab, initialValues } = this.props

    return (
      <div className={classes.container}>
        <Button
          className={fab ? classes.fab : classes.button}
          color={color}
          onClick={this.handleOpen}
          variant={variant}
        >
          {buttonLabel}
        </Button>
        <Modal onClose={this.handleClose} open={this.state.open}>
          <div className={classes.modal}>
            <Form
              handleClose={this.handleClose}
              initialValues={initialValues}
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
  buttonLabel: PropTypes.any,
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  fab: PropTypes.bool,
  initialValues: PropTypes.object.isRequired,
  submit: PropTypes.func,
  variant: PropTypes.string,
}

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps,
  )(SimpleModal),
)
