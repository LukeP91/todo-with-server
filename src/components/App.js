import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import React, { Component } from 'react'

import NoDetails from './NoDetails'
import Title from './Title'
import TodoContainer from './Todo/TodoContainer'
import TodoList from './TodoList'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Title title="Todo App" />
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <TodoList />
            </Grid>
            <Grid item xs={8}>
              <Switch>
                <Route component={NoDetails} exact path="/" />
                <Route path="/todo/:id" render={props => <TodoContainer {...props} />} />
              </Switch>
            </Grid>
          </Grid>
        </div>
      </BrowserRouter>
    )
  }
}
