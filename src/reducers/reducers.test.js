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
          payload: { description: 'new todo', completed: false, id: 1 },
        },
      ),
    ).toEqual({
      todos: [{ description: 'new todo', completed: false, id: 1 }],
    })

    expect(
      reducer(
        {
          todos: [{ description: 'old todo', completed: true, id: 1 }],
        },
        {
          type: types.ADD_TODO_SUCCESS,
          payload: { description: 'new todo', completed: false, id: 2 },
        },
      ),
    ).toEqual({
      todos: [
        { description: 'old todo', completed: true, id: 1 },
        { description: 'new todo', completed: false, id: 2 },
      ],
    })
  })

  test('handle REMOVE', () => {
    expect(
      reducer(
        {
          todos: [{ description: 'todo', completed: true, id: 1 }],
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
          todos: [{ description: 'todo', completed: true, id: 1 }],
        },
        {
          type: types.TOGGLE_TODO_SUCCESS,
          payload: 1,
        },
      ),
    ).toEqual({
      todos: [{ description: 'todo', completed: false, id: 1 }],
    })
  })

  expect(
    reducer(
      {
        todos: [{ description: 'todo', completed: false, id: 1 }],
      },
      {
        type: types.TOGGLE_TODO_SUCCESS,
        payload: 1,
      },
    ),
  ).toEqual({
    todos: [{ description: 'todo', completed: true, id: 1 }],
  })
})
