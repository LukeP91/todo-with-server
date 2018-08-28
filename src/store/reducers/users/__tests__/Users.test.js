import { users } from '../'
import { types } from '../types'

describe('todos', () => {
  test('returns initial state', () => {
    expect(users(undefined, {})).toEqual({
      users: [],
    })
  })

  test('handle FETCH_USERS_SUCCESS', () => {
    expect(
      users(
        { users: [] },
        {
          type: types.FETCH_USERS_SUCCESS,
          payload: [{ id: 1, email: 'test@example.com', name: 'Test user' }],
        },
      ),
    ).toEqual({
      users: [{ id: 1, email: 'test@example.com', name: 'Test user' }],
    })
  })

  test('handle FETCH_USERS_REQUEST', () => {
    expect(
      users(
        {
          users: [{ id: 1, email: 'test@example.com', name: 'Test user' }],
        },
        {
          type: types.FETCH_USERS_REQUEST,
        },
      ),
    ).toEqual({
      users: [{ id: 1, email: 'test@example.com', name: 'Test user' }],
    })
  })
})
