import React, { useState, Fragment } from 'react'
import { Button, Modal } from '../../../components'

export default {
  title: 'Components/Modal',
}

export const Default = () => {
  const [show, setShow] = useState(false)

  const openModal = () => setShow(true)
  const closeModal = () => setShow(false)

  return (
    <Fragment>
      <Button
        action={openModal}
        color="primary"
      >
        open modal
      </Button>
      <Modal
        close={closeModal}
        show={show}
      >
        <div>
          Your content here...
        </div>
        <Button
          action={closeModal}
          color="primary"
        >
          close modal
        </Button>
      </Modal>
    </Fragment>
  )
}
