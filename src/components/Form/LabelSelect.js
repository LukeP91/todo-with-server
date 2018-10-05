import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Chip from '@material-ui/core/Chip'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
})

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

class MultipleSelect extends React.Component {
  selected = () => {
    const {
      labels,
      classes,
      form: { values },
    } = this.props
    return labels
      .filter(label => _.includes(values.labelsIds, label.id))
      .map(label => <Chip className={classes.chip} key={label.id} label={label.value} />)
  }

  render() {
    const {
      field: { name, ...field },
      theme,
      classes,
      labels,
      form: { values },
    } = this.props

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl} id="labels-list">
          <InputLabel htmlFor="select-multiple-chip">Labels</InputLabel>
          <Select
            {...field}
            id={name}
            MenuProps={MenuProps}
            multiple
            name={name}
            renderValue={() => <div className={classes.chips}>{this.selected()}</div>}
          >
            {labels.map(label => (
              <MenuItem
                key={label.id}
                style={{
                  fontWeight:
                    values.labelsIds.indexOf(label.id) === -1
                      ? theme.typography.fontWeightRegular
                      : theme.typography.fontWeightMedium,
                }}
                value={label.id}
              >
                {label.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    )
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  field: PropTypes.object,
  labels: PropTypes.array.isRequired,
  theme: PropTypes.object,
}

export default withStyles(styles, { withTheme: true })(MultipleSelect)
