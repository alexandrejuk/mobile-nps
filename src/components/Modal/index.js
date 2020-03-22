import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './style.module.css'

const Modal = ({
  children,
  close,
  show,
}) => (
  <div
    onClick={close}
    className={classNames(styles.bgModal, {
      [styles.show]: show,
    })}
  >
  <div
    className={classNames(styles.modal, {
      [styles.show]: show,
    })}
  >
      {children}
    </div>
   </div>
)

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default Modal
