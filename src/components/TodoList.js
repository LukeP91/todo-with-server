import _ from 'lodash'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

import { fetchTodos, setFilter } from '../action_creators/todosActionCreators'
import { filteredTodos, filterTodosByStatus } from '../filters/filterTodos'
import Modal from './Form/FormModal'
import StatusFilter from './StatusFilter'
import Todo from './Todo'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit,
    marginTop: 0,
    width: '70%',
  },
})

class TodoList extends Component {
  constructor() {
    super()
    this.debounceHandleChange = _.debounce(this.handleChange, 200)
  }

  state = {
    value: '',
  }

  componentDidMount() {
    this.props.fetchTodos('http://localhost:3001/todos', { method: 'GET' })
  }

  handleChange = value => {
    const { setFilter } = this.props
    this.setState({
      value: value,
    })
    setFilter(value)
  }

  render() {
    const { todos, classes } = this.props

    return (
      <Paper className={classes.paper}>
        <TextField
          className={classes.textField}
          id="search"
          label="Search field"
          onChange={event => {
            this.debounceHandleChange(event.target.value)
          }}
          type="search"
          value={this.state.name}
        />
        <List>{todos.map((todo, i) => <Todo key={i} todo={todo} />)}</List>
        <StatusFilter />
        <Modal />
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  todos: filterTodosByStatus(filteredTodos(state.todos, state.filter), state.statusFilter),
})

const mapDispatchToProps = {
  fetchTodos,
  setFilter,
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchTodos: PropTypes.func,
  setFilter: PropTypes.func,
  todos: PropTypes.array,
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TodoList),
)
