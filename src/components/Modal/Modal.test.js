import React from 'react'
import {
  fireEvent,
  render,
} from '@testing-library/react'

import Modal from './'

const MODAL_TEXT = 'I am a modal component!'
describe('Modal component', () => {
  it('should render correctly', () => {
    const callback = jest.fn()
    const { container, getByText } = render(
      <Modal
        show
        close={callback}
      >
        {MODAL_TEXT}
      </Modal>
    )
    const SampleModal = getByText(MODAL_TEXT)
    expect(callback).not.toHaveBeenCalled()
    fireEvent.click(SampleModal)
    expect(callback).toHaveBeenCalled()
    expect(container).toMatchSnapshot()
  })
})
