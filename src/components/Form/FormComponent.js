import { connect } from 'react-redux'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import schema from './schema'
import TodoForm from './TodoForm'
import { fetchUsers } from '../../action_creators/usersActionCreators'

class FormComponent extends Component {
  componentDidMount() {
    this.props.fetchUsers('http://localhost:3001/users', { method: 'GET' })
  }

  render() {
    const { users, initialValues, submit } = this.props

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        render={formikProps => <TodoForm {...formikProps} users={users} />}
        validationSchema={schema}
      />
    )
  }
}

const mapStateToProps = state => ({
  users: state.usersReducer.users,
})

const mapDispatchToProps = {
  fetchUsers,
}

FormComponent.propTypes = {
  fetchUsers: PropTypes.func,
  initialValues: PropTypes.object,
  submit: PropTypes.func,
  users: PropTypes.array,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormComponent)
