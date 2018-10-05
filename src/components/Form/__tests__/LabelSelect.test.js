import React from 'react'
import renderer from 'react-test-renderer'
import Chip from '@material-ui/core/Chip'

import LabelSelect from '../LabelSelect'

describe('LabelSelect', () => {
  it('renders correctly', () => {
    const props = {
      labels: [{ id: 1, value: 'Label1' }, { id: 2, value: 'Label2' }],
      form: { values: { labelsIds: [1] } },
      field: { name: 'test', value: [1] },
    }
    const tree = renderer.create(<LabelSelect {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('displayes selected labels as chips', () => {
    const props = {
      labels: [{ id: 1, value: 'Label1' }, { id: 2, value: 'Label2' }, { id: 3, value: 'Label2' }],
      form: { values: { labelsIds: [1, 3] } },
      field: { name: 'test', value: [1, 3] },
    }

    const tree = renderer.create(<LabelSelect {...props} />)
    const elements = tree.root.findAllByType(Chip).map(chip => chip.props.label)

    expect(elements).toEqual(['Label1', 'Label2'])
  })
})
