import todos from '../'
import { types } from '../types'

describe('todos', () => {
  test('returns initial state', () => {
    const initialState = undefined
    const action = {}

    expect(todos(initialState, action)).toEqual({
      todos: [],
    })
  })

  test('handle ADD_TODO_SUCCESS', () => {
    const initialState = { todos: [] }
    const action = {
      type: types.ADD_TODO_SUCCESS,
      payload: {
        title: 'new_title',
        description: 'new todo',
        completed: false,
        id: 1,
        userId: 1,
        labelsIds: [1, 2],
      },
    }

    expect(todos(initialState, action)).toEqual({
      todos: [
        {
          title: 'new_title',
          description: 'new todo',
          completed: false,
          id: 1,
          userId: 1,
          labelsIds: [1, 2],
        },
      ],
    })
  })

  test('handle ADD_TODO_SUCCESS with non-empty inital state', () => {
    const initialState = {
      todos: [
        {
          title: 'old_title',
          description: 'old todo',
          completed: true,
          id: 1,
          userId: 2,
          labelsIds: [],
        },
      ],
    }
    const action = {
      type: types.ADD_TODO_SUCCESS,
      payload: {
        title: 'new_title',
        description: 'new todo',
        completed: false,
        id: 1,
        userId: 1,
        labelsIds: [1, 2],
      },
    }

    expect(todos(initialState, action)).toEqual({
      todos: [
        {
          title: 'old_title',
          description: 'old todo',
          completed: true,
          id: 1,
          userId: 2,
          labelsIds: [],
        },
        {
          title: 'new_title',
          description: 'new todo',
          completed: false,
          id: 1,
          userId: 1,
          labelsIds: [1, 2],
        },
      ],
    })
  })

  test('handle REMOVE_TODO_SUCCESS', () => {
    const initialState = {
      todos: [
        {
          title: 'new_title',
          description: 'new todo',
          completed: false,
          id: 1,
          userId: 1,
          labelsIds: [1, 2],
        },
      ],
    }
    const action = {
      type: types.REMOVE_TODO_SUCCESS,
      payload: 1,
    }

    expect(todos(initialState, action)).toEqual({
      todos: [],
    })
  })

  test('handle TOGGLE_TODO_SUCCESS for not completed todo', () => {
    const initialState = {
      todos: [
        {
          title: 'new_title',
          description: 'new todo',
          completed: false,
          id: 1,
          userId: 1,
          labelsIds: [1, 2],
        },
      ],
    }
    const action = {
      type: types.TOGGLE_TODO_SUCCESS,
      payload: 1,
    }

    expect(todos(initialState, action)).toEqual({
      todos: [
        {
          title: 'new_title',
          description: 'new todo',
          completed: true,
          id: 1,
          userId: 1,
          labelsIds: [1, 2],
        },
      ],
    })
  })

  test('handle TOGGLE_TODO_SUCCESS for completed todo', () => {
    const initialState = {
      todos: [
        {
          title: 'new_title',
          description: 'new todo',
          completed: true,
          id: 1,
          userId: 1,
          labelsIds: [1, 2],
        },
      ],
    }
    const action = {
      type: types.TOGGLE_TODO_SUCCESS,
      payload: 1,
    }

    expect(todos(initialState, action)).toEqual({
      todos: [
        {
          title: 'new_title',
          description: 'new todo',
          completed: false,
          id: 1,
          userId: 1,
          labelsIds: [1, 2],
        },
      ],
    })
  })

  test('handle EDIT_TODO_SUCCESS', () => {
    const initialState = {
      todos: [
        {
          title: 'old title',
          description: 'old todo',
          completed: true,
          id: 1,
          userId: 2,
          labelsIds: [],
        },
        {
          title: 'some title',
          description: 'some todo',
          completed: false,
          id: 2,
          userId: 1,
          labelsIds: [1, 2],
        },
      ],
    }
    const action = {
      type: types.EDIT_TODO_SUCCESS,
      payload: {
        title: 'new title',
        description: 'new todo',
        id: 1,
        userId: 3,
        labelsIds: [3, 4],
      },
    }

    expect(todos(initialState, action)).toEqual({
      todos: [
        {
          title: 'new title',
          description: 'new todo',
          completed: true,
          id: 1,
          userId: 3,
          labelsIds: [3, 4],
        },
        {
          title: 'some title',
          description: 'some todo',
          completed: false,
          id: 2,
          userId: 1,
          labelsIds: [1, 2],
        },
      ],
    })
  })
})
