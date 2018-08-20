import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles'
import _ from 'lodash'

const styles = {
  container: {
    marginBottom: '20px',
  },
}

class TextInput extends Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  renderInput = props => {
    const {
      field: { name, ...field },
      form: { errors },
      label,
      classes,
    } = props

    if (_.isEmpty(errors)) {
      return (
        <FormControl className={classes.container}>
          <InputLabel htmlFor="name-simple">{label}</InputLabel>
          <Input id="name-simple" {...field} name={name} />
        </FormControl>
      )
    } else {
      return (
        <FormControl aria-describedby="name-error-text" className={classes.container} error>
          <InputLabel htmlFor="name-error">{label}</InputLabel>
          <Input id="name-error" {...field} name={name} />
          <FormHelperText id="name-error-text">{errors[name]}</FormHelperText>
        </FormControl>
      )
    }
  }

  render() {
    return this.renderInput(this.props)
  }
}

TextInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.string,
}

export default withStyles(styles)(TextInput)
