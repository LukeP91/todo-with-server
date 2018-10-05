import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { TodoContainer } from '../TodoContainer'

describe('TodoContainer', () => {
  const props = {
    classes: {},
    fetchLabels: jest.fn(),
    fetchUsers: jest.fn(),
    labels: [{ id: 1, value: 'test' }],
    match: { params: { id: 1 } },
    todos: [{ id: 1, title: 'some title' }],
    users: [{ id: 1, name: 'Joe Doe' }],
  }

  it('renders correctly and fetches users and labels on mount', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <TodoContainer {...props} />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
    expect(props.fetchLabels).toBeCalledWith('http://localhost:3001/labels', { method: 'GET' })
    expect(props.fetchUsers).toBeCalledWith('http://localhost:3001/users', { method: 'GET' })
  })
})
