import { Field, Form } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'

import TextInput from './TextInput'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
}

const TodoForm = ({ classes }) => (
  <Form className={classes.container}>
    <Field component={TextInput} label="Title" name="title" />
    <Field component={TextInput} label="Description" name="description" />
    <Button color="primary" type="submit" variant="contained">
      Submit
    </Button>
  </Form>
)

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TodoForm)
