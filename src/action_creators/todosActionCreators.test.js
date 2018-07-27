import { todosActionCreators, types } from './todosActionCreators'

describe('actionCreators', () => {
  it('creates add action', () => {
    const expectedAction = {
      type: types.ADD,
      payload: 'todo',
    }

    expect(todosActionCreators.add('todo')).toEqual(expectedAction)
  })

  it('creates remove action', () => {
    const expectedAction = {
      type: types.REMOVE,
      payload: 1,
    }

    expect(todosActionCreators.remove(1)).toEqual(expectedAction)
  })

  it('creates toggle action', () => {
    const expectedAction = {
      type: types.TOGGLE,
      payload: 1,
    }

    expect(todosActionCreators.toggle(1)).toEqual(expectedAction)
  })
})
