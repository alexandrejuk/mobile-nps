import React from 'react'
import { render   } from '@testing-library/react'

import Modal from '.'

const MODAL_TEXT = 'I am a modal component!'
describe('Modal component', () => {
  it('should render correctly', () => {
    const callback = jest.fn()
    const { container, getByText } = render(
      <Modal
        show
      >
        {MODAL_TEXT}
      </Modal>
    )

    getByText(MODAL_TEXT)
    expect(callback).not.toHaveBeenCalled()
    expect(container).toMatchSnapshot()
  })
})
