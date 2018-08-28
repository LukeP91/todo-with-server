import { filteredTodos, filterTodosByStatus } from '../filterTodos'

describe('filterTodos', () => {
  it('founds todos with given text', () => {
    const todos = [
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
    ]

    expect(filteredTodos(todos, 'old')).toEqual([
      {
        title: 'old_title',
        description: 'old todo',
        completed: true,
        id: 1,
        userId: 2,
        labelsIds: [],
      },
    ])
  })
})

describe('filterTodos', () => {
  it('returns all todos when ALL is provided', () => {
    const todos = [
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
    ]

    expect(filterTodosByStatus(todos, 'All')).toEqual([
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
    ])
  })

  it('returns not completed todos when Open is provided', () => {
    const todos = [
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
    ]

    expect(filterTodosByStatus(todos, 'Open')).toEqual([
      {
        title: 'new_title',
        description: 'new todo',
        completed: false,
        id: 1,
        userId: 1,
        labelsIds: [1, 2],
      },
    ])
  })

  it('returns completed todos when Completed is provided', () => {
    const todos = [
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
    ]

    expect(filterTodosByStatus(todos, 'Completed')).toEqual([
      {
        title: 'old_title',
        description: 'old todo',
        completed: true,
        id: 1,
        userId: 2,
        labelsIds: [],
      }
    ])
  })
})
