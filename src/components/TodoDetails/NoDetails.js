import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

const NoDetails = ({ classes }) => (
  <Paper className={classes.paper}>
    <Typography align="left" gutterBottom variant="body1">
      Select todo from the list on the right to see details.
    </Typography>
  </Paper>
)

NoDetails.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NoDetails)
