import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './style.module.css'

const Title = ({
  color,
  size,
  type,
  text,
}) => (
  <h1
    className={classNames(
      styles.title,
      styles[color],
      styles[size],
      styles[type],
    )}
  >
    {text}
  </h1>
)

Title.propTypes = {
  color: PropTypes.PropTypes.oneOf([
    'primary',
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
  color: 'primary',
  size: 'medium',
  type: 'normal',
}

export default Title
