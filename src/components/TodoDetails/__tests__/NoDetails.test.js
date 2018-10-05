import React from 'react'
import renderer from 'react-test-renderer'

import NoDetails from '../NoDetails'

describe('NoDetails', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NoDetails />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
