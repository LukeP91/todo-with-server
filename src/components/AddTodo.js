import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import AddIcon from '@material-ui/icons/Add'

import { addTodo } from '../store/reducers/todos/actions'
import Modal from './Form/FormModal'

class AddTodo extends React.Component {
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
    return (
      <Modal
        buttonLabel={<AddIcon />}
        color="primary"
        fab
        id="add-button"
        initialValues={{ title: '', description: '', userId: '', labelsIds: [] }}
        submit={this.submit}
        variant="fab"
      />
    )
  }
}

const mapDispatchToProps = {
  addTodo,
}

AddTodo.propTypes = {
  addTodo: PropTypes.func,
}

export default connect(
  null,
  mapDispatchToProps,
)(AddTodo)
