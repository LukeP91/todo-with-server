import { todosReducer as reducer } from './reducers'
import { types } from '../action_creators/todosActionCreators'

describe('reducer', () => {
  test('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      todos: [],
    })
  })

  test('handle ADD', () => {
    expect(
      reducer(
        { todos: [] },
        {
          type: types.ADD_TODO_SUCCESS,
          payload: { title: 'new_title', description: 'new todo', completed: false, id: 1 },
        },
      ),
    ).toEqual({
      todos: [{ title: 'new_title', description: 'new todo', completed: false, id: 1 }],
    })

    expect(
      reducer(
        {
          todos: [{ title: 'old_title', description: 'old todo', completed: true, id: 1 }],
        },
        {
          type: types.ADD_TODO_SUCCESS,
          payload: { title: 'new_title', description: 'new todo', completed: false, id: 2 },
        },
      ),
    ).toEqual({
      todos: [
        { title: 'old_title', description: 'old todo', completed: true, id: 1 },
        { title: 'new_title', description: 'new todo', completed: false, id: 2 },
      ],
    })
  })

  test('handle REMOVE', () => {
    expect(
      reducer(
        {
          todos: [{ title: 'new_title', description: 'todo', completed: true, id: 1 }],
        },
        {
          type: types.REMOVE_TODO_SUCCESS,
          payload: 1,
        },
      ),
    ).toEqual({
      todos: [],
    })
  })

  test('handle TOGGLE', () => {
    expect(
      reducer(
        {
          todos: [{ title: 'new_title', description: 'todo', completed: true, id: 1 }],
        },
        {
          type: types.TOGGLE_TODO_SUCCESS,
          payload: 1,
        },
      ),
    ).toEqual({
      todos: [{ title: 'new_title', description: 'todo', completed: false, id: 1 }],
    })
  })

  expect(
    reducer(
      {
        todos: [{ title: 'new_title', description: 'todo', completed: false, id: 1 }],
      },
      {
        type: types.TOGGLE_TODO_SUCCESS,
        payload: 1,
      },
    ),
  ).toEqual({
    todos: [{ title: 'new_title', description: 'todo', completed: true, id: 1 }],
  })
})
