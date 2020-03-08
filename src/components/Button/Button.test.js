import React from 'react'
import { render } from '@testing-library/react'

import Button from './'

describe('Button component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Button
        color="primary"
      >
        Button component
      </Button>
    )
    expect(container).toMatchSnapshot()
  })
})
