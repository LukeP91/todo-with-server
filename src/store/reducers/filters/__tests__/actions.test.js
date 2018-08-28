import fetchMock from 'fetch-mock'

import * as actions from '../actions'

describe('actionCreators', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates action to set filter', () => {
    const text = 'test'
    expect(actions.setFilter(text)).toMatchSnapshot()
  })

  it('creates action to set visiblity filter', () => {
    const text = 'ALL'
    expect(actions.setVisiblityFilter(text)).toMatchSnapshot()
  })
})
