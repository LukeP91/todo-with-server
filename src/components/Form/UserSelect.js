import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Select from '@material-ui/core/Select'

const styles = {
  container: {
    marginBottom: '20px',
  },
}

class TextInput extends Component {
  renderInput = props => {
    const {
      field: { name, ...field },
      label,
      classes,
      users,
    } = props

    return (
      <FormControl className={classes.container} id="users-list">
        <InputLabel htmlFor="name-simple">{label}</InputLabel>
        <Select {...field} id="user-select" name={name}>
          {users.map(user => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  }

  render() {
    return this.renderInput(this.props)
  }
}
TextInput.propTypes = {
  classes: PropTypes.object,
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
  users: PropTypes.array,
}

export default withStyles(styles)(TextInput)
