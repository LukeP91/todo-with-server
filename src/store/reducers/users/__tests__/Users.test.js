import users from '../'
import { types } from '../types'

describe('todos', () => {
  test('returns initial state', () => {
    const initialState = undefined
    const action = {}

    expect(users(initialState, action)).toEqual({
      users: [],
    })
  })

  test('handle FETCH_USERS_SUCCESS', () => {
    const initialState = { users: [] }
    const action = {
      type: types.FETCH_USERS_SUCCESS,
      payload: [{ id: 1, email: 'test@example.com', name: 'Test user' }],
    }

    expect(users(initialState, action)).toEqual({
      users: [{ id: 1, email: 'test@example.com', name: 'Test user' }],
    })
  })

  test('handle FETCH_USERS_REQUEST', () => {
    const initialState = {
      users: [{ id: 1, email: 'test@example.com', name: 'Test user' }],
    }
    const action = { type: types.FETCH_USERS_REQUEST }

    expect(users(initialState, action)).toEqual({
      users: [{ id: 1, email: 'test@example.com', name: 'Test user' }],
    })
  })
})
