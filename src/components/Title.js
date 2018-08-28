import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: '15px',
  },
  flex: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  }
}

class Title extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.flex} color="inherit" variant="title">
              <Link className={classes.link} to={'/'}>
                Todos
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Title.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Title)
