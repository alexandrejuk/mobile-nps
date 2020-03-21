import React from 'react'
import { render } from '@testing-library/react'

import Radial from './'

describe('Radial component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Radial
        progress={25}
        cx={8}
        cy={8}
        r={8}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
