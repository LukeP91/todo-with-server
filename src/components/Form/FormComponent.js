import { connect } from 'react-redux'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { addTodo } from '../../action_creators/todosActionCreators'
import schema from './schema'
import TodoForm from './TodoForm'

class FormComponent extends Component {
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
  }

  render() {
    const initialValues = { title: '', description: '' }

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.submit}
        render={formikProps => <TodoForm {...formikProps} />}
        validationSchema={schema}
      />
    )
  }
}

const mapDispatchToProps = {
  addTodo,
}

FormComponent.propTypes = {
  addTodo: PropTypes.func,
}

export default connect(
  null,
  mapDispatchToProps,
)(FormComponent)
