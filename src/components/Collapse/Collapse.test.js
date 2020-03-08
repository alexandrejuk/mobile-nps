import React from 'react'
import { render } from '@testing-library/react'

import Collapse from './'

describe('Collapse component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Collapse
        title="I am collapse component"
      >
        Lorem ipsum color, danger baba
      </Collapse>
    )
    expect(container).toMatchSnapshot()
  })
})
