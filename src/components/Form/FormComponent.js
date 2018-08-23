import { connect } from 'react-redux'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { fetchLabels } from '../../store/reducers/labels/actions'
import { fetchUsers } from '../../store/reducers/users/actions'
import schema from './schema'
import TodoForm from './TodoForm'

class FormComponent extends Component {
  componentDidMount() {
    this.props.fetchUsers('http://localhost:3001/users', { method: 'GET' })
    this.props.fetchLabels('http://localhost:3001/labels', { method: 'GET' })
  }

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

const mapStateToProps = state => ({
  labels: state.labels.labels,
  users: state.users.users,
})

const mapDispatchToProps = {
  fetchLabels,
  fetchUsers,
}

FormComponent.propTypes = {
  fetchUsers: PropTypes.func,
  initialValues: PropTypes.object,
  labels: PropTypes.array,
  submit: PropTypes.func,
  users: PropTypes.array,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormComponent)
