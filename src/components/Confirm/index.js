import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './style.module.css'

const Confirm = ({
  children,
  close,
  show,
}) => (
  <div
    onClick={close}
    className={classNames(styles.bgConfirm, {
      [styles.show]: show,
    })}
  >
  <div
    className={classNames(styles.confirm, {
      [styles.show]: show,
    })}
  >
      {children}
    </div>
   </div>
)

Confirm.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default Confirm
