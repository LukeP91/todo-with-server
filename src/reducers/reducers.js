import { combineReducers } from 'redux'

import { filtersReducer } from './filtersReducers'
import { todosReducer } from './todosReducer'
import { usersReducer } from './usersReducers'

const reducer = combineReducers({
  filtersReducer,
  todosReducer,
  usersReducer,
})

export default reducer
