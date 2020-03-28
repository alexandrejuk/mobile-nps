import React from 'react'
import { render } from '@testing-library/react'

import ErrorContainer from '.'

describe('Error containers', () => {
  it('should render correctly', () => {
    const callbak = jest.fn()
    const { container } = render(
      <ErrorContainer goBack={callbak} />
    )
    expect(container).toMatchSnapshot()
  })
})
