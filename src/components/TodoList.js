import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { fetchTodos } from '../action_creators/todosActionCreators'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Modal from './Form/FormModal'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
  },
})

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos('http://localhost:3001/todos', { method: 'GET' })
  }

  render() {
    const { todos, classes } = this.props

    return (
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <List>{todos.map((todo, i) => <Todo key={i} todo={todo} />)}</List>
            <Modal />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = {
  fetchTodos,
}

TodoList.propTypes = {
  todos: PropTypes.array,
  fetchTodos: PropTypes.func,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TodoList),
)
