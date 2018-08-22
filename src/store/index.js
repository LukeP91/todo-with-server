import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { filters } from './reducers/filters'
import { todos } from './reducers/todos'
import { users } from './reducers/users'
const reducer = combineReducers({
  filters,
  todos,
  users,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)),
)

export default store
