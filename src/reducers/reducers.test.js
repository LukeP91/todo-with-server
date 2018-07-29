import { reducer } from './reducers'
import { types } from '../action_creators/todosActionCreators'

describe('reducer', () => {
  test('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      todos: [
        { description: 'Create db for json server', completed: true },
        { description: 'Create local store version of the app', completed: false },
        { description: 'Fetch data from json server', completed: false },
      ],
    })
  })

  test('handle ADD', () => {
    expect(
      reducer(
        { todos: [] },
        {
          type: types.ADD,
          payload: 'new todo',
        },
      ),
    ).toEqual({
      todos: [{ description: 'new todo', completed: false }],
    })

    expect(
      reducer(
        {
          todos: [{ description: 'old todo', completed: true }],
        },
        {
          type: types.ADD,
          payload: 'new todo',
        },
      ),
    ).toEqual({
      todos: [
        { description: 'new todo', completed: false },
        { description: 'old todo', completed: true },
      ],
    })
  })

  test('handle REMOVE', () => {
    expect(
      reducer(
        {
          todos: [{ description: 'todo', completed: true }],
        },
        {
          type: types.REMOVE,
          payload: 0,
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
          todos: [{ description: 'todo', completed: true }],
        },
        {
          type: types.TOGGLE,
          payload: 0,
        },
      ),
    ).toEqual({
      todos: [{ description: 'todo', completed: false }],
    })
  })

  expect(
    reducer(
      {
        todos: [{ description: 'todo', completed: false }],
      },
      {
        type: types.TOGGLE,
        payload: 0,
      },
    ),
  ).toEqual({
    todos: [{ description: 'todo', completed: true }],
  })
})
