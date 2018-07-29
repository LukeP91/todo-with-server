import { reducer } from './reducers'
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
          type: types.ADD,
          payload: 'new todo',
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
          type: types.ADD,
          payload: 'new todo',
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
          type: types.REMOVE,
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
          type: types.TOGGLE,
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
        type: types.TOGGLE,
        payload: 1,
      },
    ),
  ).toEqual({
    todos: [{ description: 'todo', completed: true, id: 1 }],
  })
})
