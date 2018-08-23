import { NavLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Link extends Component {
  render() {
    const { todo } = this.props
    return (
      <NavLink activeClassName="selected" to={`/todo/${todo.id}`}>
        <ListItem button>
          <ListItemText primary={todo.title} />
        </ListItem>
      </NavLink>
    )
  }
}

export default Link

Link.propTypes = {
  todo: PropTypes.object,
}
