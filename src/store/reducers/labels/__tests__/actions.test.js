import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from '../actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actionCreators', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates FETCH_LABELS_SUCCESS when fetching labels has been done', () => {
    fetchMock.getOnce('http://example.com/labels', {
      body: {
        labels: [{ id: 1, value: 'test' }, { id: 2, value: 'prod' }],
      },
    })
    const store = mockStore({ labels: [] })

    return store
      .dispatch(actions.fetchLabels('http://example.com/labels', { method: 'GET' }))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })
})
