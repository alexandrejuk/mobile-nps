import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './style.module.css'

const Button = ({
  action,
  children,
  color,
  type,
}) => (
  <button
    onClick={action}
    className={classNames(
      styles.button,
      styles[color],
    )}
    type={type}
  >
    {children}
  </button>
)

Button.propTypes = {
  action: PropTypes.func,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'outline',
    'primary',
  ]).isRequired,
  type: PropTypes.string,
}

Button.defaultProps = {
  action: null,
  type: 'button',
}

export default Button
