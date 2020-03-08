import React from 'react'
import {
  fireEvent,
  render,
} from '@testing-library/react'

import Button from './'

const BUTTON_TEXT = 'Button component'

describe('Button component', () => {
  it('should render correctly primary button', () => {
    const callback = jest.fn()
    const { container, getByText } = render(
      <Button
        action={callback}
        color="primary"
      >
        {BUTTON_TEXT}
      </Button>
    )
    const SampleButton = getByText(BUTTON_TEXT)

    expect(callback).not.toHaveBeenCalled()

    fireEvent.click(SampleButton)

    expect(callback).toHaveBeenCalled()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly outline button', () => {
    const callback = jest.fn()
    const { container, getByText } = render(
      <Button
        action={callback}
        color="outline"
      >
        {BUTTON_TEXT}
      </Button>
    )
    const SampleButton = getByText(BUTTON_TEXT)

    expect(callback).not.toHaveBeenCalled()

    fireEvent.click(SampleButton)

    expect(callback).toHaveBeenCalled()
    expect(container).toMatchSnapshot()
  })
})
