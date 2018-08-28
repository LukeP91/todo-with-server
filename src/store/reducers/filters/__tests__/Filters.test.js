import filters from '../'
import { types } from '../types'

describe('todos', () => {
  test('returns initial state', () => {
    const initialState = undefined
    const action = {}

    expect(filters(initialState, action)).toEqual({ query: '', visiblityFilter: 'All' })
  })

  test('handle SET_FILTER', () => {
    const initialState = { query: '', visiblityFilter: 'All' }
    const action = {
      type: types.SET_FILTER,
      payload: 'test',
    }
    expect(filters(initialState, action)).toEqual({ query: 'test', visiblityFilter: 'All' })
  })

  test('handle SET_VISIBILITY_FILTER', () => {
    const initialState = { query: '', visiblityFilter: 'All' }
    const action = {
      type: types.SET_VISIBILITY_FILTER,
      payload: 'Completed',
    }
    expect(filters(initialState, action)).toEqual({ query: '', visiblityFilter: 'Completed' })
  })
})
