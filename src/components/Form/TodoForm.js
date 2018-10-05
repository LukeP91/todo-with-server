import { Field, Form } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'

import LabelSelect from './LabelSelect'
import TextInput from './TextInput'
import UserSelect from './UserSelect'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
}

const TodoForm = ({ classes, labels, users }) => (
  <Form className={classes.container}>
    <Field component={TextInput} label="Title" name="title" />
    <Field component={TextInput} label="Description" name="description" />
    <Field component={UserSelect} label="User" name="userId" users={users} />
    <Field component={LabelSelect} label="Labels" labels={labels} name="labelsIds" />
    <Button color="primary" id="submit-button" type="submit" variant="contained">
      Submit
    </Button>
  </Form>
)

TodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
  labels: PropTypes.array,
  users: PropTypes.array,
}

export default withStyles(styles)(TodoForm)
