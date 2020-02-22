import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './style.module.css'

const Button = ({
  action,
  children,
  color,
}) => (
  <button
    onClick={action}
    className={classNames(
      styles.button,
      styles[color],
    )}
    type="button"
  >
    {children}
  </button>
)

Button.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'outline',
    'primary',
  ]).isRequired,
}

export default Button
