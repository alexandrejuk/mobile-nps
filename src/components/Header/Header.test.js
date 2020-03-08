import React from 'react'
import {
  fireEvent,
  render,
} from '@testing-library/react'

import Header from './'

describe('Header component', () => {
  it('should render correctly', () => {
    const callback = jest.fn()
    const { container, getByRole } = render(
      <Header
        action={callback}
      />
    )
    const SampleHeaderRole = getByRole("button")
    expect(callback).not.toHaveBeenCalled()
    fireEvent.click(SampleHeaderRole)
    expect(callback).toHaveBeenCalled()
    expect(container).toMatchSnapshot()

  })
})
