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

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been successful', () => {
    fetchMock.getOnce('http://example.com/todos', {
      body: {
        todos: [{ description: 'new todo', completed: false, id: 1 }],
      },
    })

    const store = mockStore({ todos: [] })

    return store
      .dispatch(actions.fetchTodos('http://example.com/todos', { method: 'GET' }))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })

  it('creates REMOVE_TODO_SUCCESS when removing todo has been successful', () => {
    fetchMock.deleteOnce('http://example.com/todos/1', {})

    const store = mockStore({ todos: [] })

    return store
      .dispatch(actions.removeTodo('http://example.com/todos/1', { method: 'DELETE' }))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })

  it('creates ADD_TODO_SUCCESS when adding todo has been successful', () => {
    fetchMock.postOnce('http://example.com/todos', {
      body: { description: 'new todo', completed: false, id: 1, userId: 1, labelsIds: [1, 2] },
      status: 201,
    })

    const store = mockStore({ todos: [] })

    return store
      .dispatch(
        actions.addTodo('http://example.com/todos', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            description: 'new todo',
            completed: false,
            userId: 1,
            labelsIds: [1, 2],
          }),
        }),
      )
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })

  it('creates TOGGLE_TODO_SUCCESS when removing todo has been successful', () => {
    fetchMock.patchOnce('http://example.com/todos/1', {})

    const store = mockStore({ todos: [] })

    return store
      .dispatch(actions.toggleTodo('http://example.com/todos/1', { method: 'PATCH' }))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })

  it('creates EDIT_TODO_SUCCESS when editing todo has been successful', () => {
    fetchMock.patchOnce('http://example.com/todos/1', {
      body: { id: 1, name: 'new name' },
    })

    const store = mockStore({ todos: [{ id: 1, name: 'old name', description: 'desc' }] })

    return store
      .dispatch(
        actions.editTodo('http://example.com/todos/1', {
          method: 'PATCH',
          body: { id: 1, name: 'new name' },
        }),
      )
      .then(() => {
        expect(store.getActions()).toMatchSnapshot()
      })
  })
})
