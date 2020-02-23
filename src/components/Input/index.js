import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './style.module.css'

const Input = ({
  error,
  label,
  name,
  placeholder,
  type,
}) => (
  <div className={styles.inputWrapper}>
    <label className={classNames(
      styles.label,
      {
        [styles.error]: error,
      }
    )}>
      {label}
    </label>
    <input
      className={styles.input}
      name={name}
      placeholder={placeholder}
      type={type}
    />
    <p className={classNames(
      styles.errorMessage,
      {
        [styles.error]: error,
      }
    )}>{error}</p>
  </div>
)

Input.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'email',
    'number',
    'password',
    'text',
  ]).isRequired,
}

Input.defaultProps = {
  error: null,
}

export default Input
