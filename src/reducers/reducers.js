import { combineReducers } from 'redux'

import { todosReducer } from './todosReducer'
import { filtersReducer } from './filtersReducers'

const reducer = combineReducers({
  todosReducer,
  filtersReducer,
})

export default reducer
