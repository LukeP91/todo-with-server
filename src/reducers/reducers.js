import { types } from '../action_creators/todosActionCreators'

const initialState = {
  todos: [
    { description: 'Create db for json server', completed: true, id: 1 },
    { description: 'Create local store version of the app', completed: false, id: 2 },
    { description: 'Fetch data from json server', completed: false, id: 3 },
  ],
}

export const reducer = (state = initialState, action) => {
  const { todos } = state
  const { type, payload } = action
  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [{ description: payload, completed: false, id: todos.length + 1 }, ...todos],
      }
    }
    case types.REMOVE: {
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
