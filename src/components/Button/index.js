import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './style.module.css'

const Button = ({
  action,
  children,
  color,
  size,
  type,
}) => (
  <button
    onClick={action}
    className={classNames(
      styles.button,
      styles[color],
      styles[size],
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
    'secondary',
  ]).isRequired,
  size: PropTypes.oneOf([
    'xsmall',
    'small',
  ]),
  type: PropTypes.string,
}

Button.defaultProps = {
  action: null,
  size: null,
  type: 'button',
}

export default Button
