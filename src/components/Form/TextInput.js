import _ from 'lodash'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const styles = {
  container: {
    marginBottom: '20px',
  },
}

class TextInput extends Component {
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
