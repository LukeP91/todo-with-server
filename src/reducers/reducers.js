import { types } from '../action_creators/todosActionCreators'

const initialState = {
  todos: [],
}

export const reducer = (state = initialState, action) => {
  const { todos } = state
  const { type, payload } = action

  switch (type) {
    case types.FETCH_TODOS_REQUEST: {
      return state
    }
    case types.FETCH_TODOS_SUCCESS: {
      return {
        ...state,
        todos: payload,
      }
    }
    case types.ADD_TODO_REQUEST: {
      return state
    }
    case types.ADD_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...todos, payload],
      }
    }
    case types.REMOVE_TODO_REQUEST: {
      return state
    }
    case types.REMOVE_TODO_SUCCESS: {
      return {
        ...state,
        todos: todos.filter(todo => todo.id !== payload),
      }
    }
    case types.TOGGLE: {
      return {
        ...state,
        todos: todos.map(todo => {
          if (todo.id === payload) {
            return { description: todo.description, completed: !todo.completed, id: todo.id }
          } else {
            return todo
          }
        }),
      }
    }
    default: {
      return state
    }
  }
}
