import { labels } from '../'
import { types } from '../types'

describe('todos', () => {
  test('returns initial state', () => {
    expect(labels(undefined, {})).toEqual({
      labels: [],
    })
  })

  test('handle FETCH_LABELS_SUCCESS', () => {
    expect(
      labels(
        { labels: [] },
        {
          type: types.FETCH_LABELS_SUCCESS,
          payload: [{ id: 1, value: 'test' }, { id: 2, value: 'test2' }],
        },
      ),
    ).toEqual({
      labels: [{ id: 1, value: 'test' }, { id: 2, value: 'test2' }],
    })
  })

  test('handle FETCH_LABELS_REQUEST', () => {
    expect(
      labels(
        {
          labels: [{ id: 1, value: 'test' }, { id: 2, value: 'test2' }],
        },
        {
          type: types.FETCH_LABELS_REQUEST,
        },
      ),
    ).toEqual({
      labels: [{ id: 1, value: 'test' }, { id: 2, value: 'test2' }],
    })
  })
})
