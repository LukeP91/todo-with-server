import React from 'react'
import renderer from 'react-test-renderer'

import FormComponent from '../FormComponent'

describe('FormComponent', () => {
  it('renders correctly', () => {
    const props = {
      users: [{ id: 1, name: 'Joe Doe' }],
      labels: [{ id: 1, value: 'test' }],
      initialValues: { title: '', description: '', userId: '', labelsIds: [] },
      submit: jest.fn(),
    }
    const wrapper = renderer.create(<FormComponent {...props} />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
