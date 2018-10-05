import React from 'react'
import renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'


import TodoForm from '../TodoForm'

describe('TodoForm', () => {
  xit('renders correctly', () => {
    const labels = [{ id: 1, value: 'Label1' }, { id: 2, value: 'Label2' }]
    const users = [{ id: 1, email: 'test@example.com', name: 'Test user' }]

    const renderer = new ShallowRenderer()
    renderer.render(<TodoForm labels={labels} users={users} />)
    const result = renderer.getRenderOutput()

    expect(result).toMatchSnapshot()
  })
})
