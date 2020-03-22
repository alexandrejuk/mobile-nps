import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './style.module.css'

const Title = ({
  color,
  size,
  text,
  textAlign,
  type,
}) => (
  <h1
    className={classNames(
      styles[color],
      styles[size],
      styles[textAlign],
      styles.title,
      styles[type],
    )}
  >
    {text}
  </h1>
)

Title.propTypes = {
  textAlign: PropTypes.PropTypes.oneOf([
    'center',
    'left',
    'right',
  ]),
  color: PropTypes.PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  size: PropTypes.PropTypes.oneOf([
    'medium',
    'small',
    'large',
  ]),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'bold',
    'normal',
  ]),
}

Title.defaultProps = {
  textAlign: 'left',
  color: 'primary',
  size: 'medium',
  type: 'normal',
}

export default Title
