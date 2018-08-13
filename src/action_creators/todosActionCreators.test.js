import { types, toggle } from './todosActionCreators'

describe('actionCreators', () => {
  it('creates toggle action', () => {
    const expectedAction = {
      type: types.TOGGLE,
      payload: 1,
    }

    expect(toggle(1)).toEqual(expectedAction)
  })
})
