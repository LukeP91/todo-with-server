import React from 'react'
import renderer from 'react-test-renderer'

import TextInput from '../TextInput'

describe('TextInput', () => {
  it('renders correctly', () => {
    const field = { name: 'test', value: '' }
    const form = { error: {} }

    const tree = renderer.create(<TextInput field={field} form={form} label="test" />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  describe('when errors are passed', () => {
    it('renders TextInput with errors', () => {
      const field = { name: 'test', value: '' }
      const form = { error: { description: 'some error' } }

      const tree = renderer.create(<TextInput field={field} form={form} label="test" />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
