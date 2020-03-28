import React from 'react'
import {
  render,
} from '@testing-library/react'

import Skeleton from '.'

describe('Skeleton component', () => {
  it('should render correctly primary button', () => {
    const { container } = render(
      <Skeleton />
    )
    expect(container).toMatchSnapshot()
  })
})
