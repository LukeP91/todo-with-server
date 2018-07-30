import { remove, types, toggle } from './todosActionCreators'

describe('actionCreators', () => {
  it('creates remove action', () => {
    const expectedAction = {
      type: types.REMOVE,
      payload: 1,
    }

    expect(remove(1)).toEqual(expectedAction)
  })

  it('creates toggle action', () => {
    const expectedAction = {
      type: types.TOGGLE,
      payload: 1,
    }

    expect(toggle(1)).toEqual(expectedAction)
  })
})
