import { types } from '../action_creators/todosActionCreators'

const initialState = {
  todos: [
    { description: 'Create db for json server', completed: true },
    { description: 'Create local store version of the app', completed: false },
    { description: 'Fetch data from json server', completed: false },
  ],
}

export const reducer = (state = initialState, action) => {
  const { todos } = state
  const { type, payload } = action
  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [{ description: payload, completed: false }, ...todos],
      }
    }
    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todos, i) => i !== payload),
      }
    }
    case types.COMPLETE: {
      return {
        ...state,
        todos: todos.map((todo, i) => {
          if (i === payload) {
            return { description: todo.description, completed: !todo.completed }
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
