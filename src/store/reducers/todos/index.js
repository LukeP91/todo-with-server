import { types } from './types'

const initialState = {
  todos: [],
}

export const todos = (state = initialState, action) => {
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
    case types.TOGGLE_TODO_REQUEST: {
      return state
    }
    case types.TOGGLE_TODO_SUCCESS: {
      return {
        ...state,
        todos: todos.map(todo => {
          if (todo.id === payload) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          } else {
            return todo
          }
        }),
      }
    }
    case types.EDIT_TODO_REQUEST: {
      return state
    }
    case types.EDIT_TODO_SUCCESS: {
      return {
        ...state,
        todos: todos.map(todo => {
          if (todo.id === payload.id) {
            return {
              ...todo,
              title: payload.title,
              description: payload.description,
              userId: payload.userId,
            }
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
