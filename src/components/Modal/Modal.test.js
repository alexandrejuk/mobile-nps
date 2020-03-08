import React from 'react'
import { render } from '@testing-library/react'

import Modal from './'

describe('Modal component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Modal
        show
        close={() => {}}
      >
        I am a modal component!
      </Modal>
    )
    expect(container).toMatchSnapshot()
  })
})
