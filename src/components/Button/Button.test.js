import React from 'react'
import { render } from '@testing-library/react'

import Button from './'

describe('Button component', () => {
  it('should render correctly primary button', () => {
    const { container } = render(
      <Button
        color="primary"
      >
        Button component
      </Button>
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly outline button', () => {
    const { container } = render(
      <Button
        color="outline"
      >
        Button component
      </Button>
    )
    expect(container).toMatchSnapshot()
  })
})
