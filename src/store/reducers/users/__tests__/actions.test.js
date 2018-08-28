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

  it('creates FETCH_USERS_SUCCESS when fetching labels has been done', () => {
    fetchMock.getOnce('http://example.com/users', {
      body: {
        users: [
          {
            id: 1,
            email: 'test@example.com',
            name: 'Test user',
          },
          {
            id: 2,
            email: 'lukepawlik@example.com',
            name: 'Luke Pawlik',
          },
        ],
      },
    })

    const store = mockStore({ users: [] })

    return store
      .dispatch(actions.fetchUsers('http://example.com/users', { method: 'GET' }))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })
})
