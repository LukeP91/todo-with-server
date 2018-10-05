import { MemoryRouter } from 'react-router-dom'
import React from 'react'
import renderer from 'react-test-renderer'

import List from '../Link'

describe('Link', () => {
  test('renders correctly', () => {
    const todo = { id: 1, title: 'some title' }
    const tree = renderer
      .create(
        <MemoryRouter>
          <List todo={todo} />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
