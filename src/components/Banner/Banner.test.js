import React from 'react'
import { render } from '@testing-library/react'

import Banner from './'

describe('Banner component', () => {
  it('should render correctly primary banner', () => {
    const { container } = render(
      <Banner fill="primary" />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly secondary banner', () => {
    const { container } = render(
      <Banner fill="secondary" />
    )
    expect(container).toMatchSnapshot()
  })
})
