import React from 'react'
import renderer from 'react-test-renderer'

import { SimpleModal } from '../FormModal'
import Form from '../FormComponent'

describe('SimpleModal', () => {
  const defaultProps = {
    buttonLabel: 'test',
    classes: {},
    color: 'primary',
    fetchLabels: jest.fn(),
    fetchUsers: jest.fn(),
    initialValues: { title: '', description: '', userId: '', labelsIds: [] },
    labels: [{ id: 1, value: 'test' }],
    users: [{ id: 1, name: 'Joe Doe' }],
    submit: jest.fn(),
  }

  const setup = overrideProps => {
    const props = { ...defaultProps, ...overrideProps }
    const wrapper = renderer.create(<SimpleModal {...props} />)
    return { props, wrapper }
  }

  it('renders correctly', () => {
    const { wrapper, props } = setup()

    expect(wrapper).toMatchSnapshot()
    expect(props.fetchLabels).toBeCalledWith('http://localhost:3001/labels', { method: 'GET' })
    expect(props.fetchUsers).toBeCalledWith('http://localhost:3001/users', { method: 'GET' })
  })

  xit('opens renders modal with form', () => {
    const { wrapper } = setup()
    expect(wrapper.getInstance().state.open).toEqual(false)
    const button = wrapper.root.findByType('button')
    button.props.onClick()

    expect(wrapper.getInstance().state.open).toEqual(true)
  })

  xit('on submit it closes the modal', () => {
    const { wrapper, props } = setup()
    wrapper.find().prop('onClick')()
    const form = wrapper.find(Form)
    form.prop('submit')()

    expect(props.submit).toBeCalled()
    expect(wrapper.state().open).toEqual(false)
  })
})
