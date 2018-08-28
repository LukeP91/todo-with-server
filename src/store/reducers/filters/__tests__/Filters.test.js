import { filters } from '../'
import { types } from '../types'

describe('todos', () => {
  test('returns initial state', () => {
    expect(filters(undefined, {})).toEqual({ query: '', visiblityFilter: 'All' })
  })

  test('handle SET_FILTER', () => {
    expect(
      filters(
        { query: '', visiblityFilter: 'All' },
        {
          type: types.SET_FILTER,
          payload: 'test',
        },
      ),
    ).toEqual({ query: 'test', visiblityFilter: 'All' })
  })

  test('handle SET_VISIBILITY_FILTER', () => {
    expect(
      filters(
        { query: '', visiblityFilter: 'All' },
        {
          type: types.SET_VISIBILITY_FILTER,
          payload: 'Completed',
        },
      ),
    ).toEqual({ query: '', visiblityFilter: 'Completed' })
  })
})
