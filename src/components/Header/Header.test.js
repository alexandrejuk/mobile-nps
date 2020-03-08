import React from 'react'
import { render } from '@testing-library/react'

import Header from './'

describe('Header component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Header
        action={() => {}}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
