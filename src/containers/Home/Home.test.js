import React from 'react'
import {
  fireEvent,
  render,
} from '@testing-library/react'

import Home from './'

describe('Home container', () => {
  it('should render correctly', async () => {
    const callback = jest.fn()
    const { container } = render(
      <Home goToPage={callback} />
    )
    expect(container).toMatchSnapshot()
  })
})
