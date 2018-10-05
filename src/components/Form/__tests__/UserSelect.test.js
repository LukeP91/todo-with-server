import React from 'react'
import { shallow } from 'enzyme'

import UserSelect from '../UserSelect'

describe('UserSelect', () => {
  it('renders correctly', () => {
    const users = [{ id: 1, email: 'test@example.com', name: 'Test user' }]
    const form = { values: { labelsIds: [1] } }
    const field = { name: 'test', value: form.values.labelsIds }

    const wrapper = shallow(<UserSelect field={field} form={form} users={users} />)

    expect(wrapper).toMatchSnapshot()
  })
})
