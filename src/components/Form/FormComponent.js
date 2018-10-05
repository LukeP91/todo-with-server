import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import schema from './schema'
import TodoForm from './TodoForm'

export default class FormComponent extends Component {
  render() {
    const { users, labels, initialValues, submit } = this.props

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        render={formikProps => <TodoForm {...formikProps} labels={labels} users={users} />}
        validationSchema={schema}
      />
    )
  }
}

FormComponent.propTypes = {
  initialValues: PropTypes.object,
  labels: PropTypes.array,
  submit: PropTypes.func,
  users: PropTypes.array,
}

