import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import types from '../types'
import { fetchTodos, removeTodo, addTodo, toggleTodo } from '../actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actionCreators', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock.getOnce('http://example.com/todos', {
      body: {
        todos: [{ description: 'new todo', completed: false, id: 1 }],
      },
    })

    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      {
        type: types.FETCH_TODOS_SUCCESS,
        payload: { todos: [{ description: 'new todo', completed: false, id: 1 }] },
      },
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(fetchTodos('http://example.com/todos', { method: 'GET' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates REMOVE_TODO_SUCCESS when removing todo has been done', () => {
    fetchMock.deleteOnce('http://example.com/todos/1', {})

    const expectedActions = [
      { type: types.REMOVE_TODO_REQUEST },
      {
        type: types.REMOVE_TODO_SUCCESS,
        payload: 1,
      },
    ]
    const store = mockStore({ todos: [] })

    return store
      .dispatch(removeTodo('http://example.com/todos/1', { method: 'DELETE' }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates ADD_TODO_SUCCESS when adding todo has been done', () => {
    fetchMock.postOnce('http://example.com/todos', {
      body: { description: 'new todo', completed: false, id: 1 },
      status: 201,
    })

    const expectedActions = [
      { type: types.ADD_TODO_REQUEST },
      {
        type: types.ADD_TODO_SUCCESS,
        payload: { description: 'new todo', completed: false, id: 1 },
      },
    ]
    const store = mockStore({ todos: [] })

    return store
      .dispatch(
        addTodo('http://example.com/todos', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ description: 'new todo', completed: false }),
        }),
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates TOGGLE_TODO_SUCCESS when removing todo has been done', () => {
    fetchMock.patchOnce('http://example.com/todos/1', {})

    const expectedActions = [
      { type: types.TOGGLE_TODO_REQUEST },
      {
        type: types.TOGGLE_TODO_SUCCESS,
        payload: 1,
      },
    ]
    const store = mockStore({ todos: [] })

    return store
      .dispatch(toggleTodo('http://example.com/todos/1', { method: 'PATCH' }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
