import React from 'react'
import { render } from '@testing-library/react'

import Home from './'

describe('Home container', () => {
  it('should render correctly', async () => {
    const callback = jest.fn()
    const { container } = render(
      <Home
        closeModal={callback}
        goToPage={callback}
        logout={callback}
        show={false}
        showModal={callback}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
