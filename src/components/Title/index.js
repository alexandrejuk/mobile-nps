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
  styleText,
}) => (
  <h1
    className={classNames(
      styles[color],
      styles[size],
      styles[textAlign],
      styles.title,
      styles[type],
      styles[styleText],
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
    'blue',
    'cardinal',
    'secondary',
    'primary',
    'white',
  ]),
  size: PropTypes.PropTypes.oneOf([
    'medium-1',
    'medium',
    'normal',
    'small',
    'large',
  ]),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'bold',
    'normal',
    'mediumBold',
  ]),
  styleText: PropTypes.oneOf([
    'undercore',
  ]),
}

Title.defaultProps = {
  textAlign: 'left',
  color: 'primary',
  size: 'medium',
  type: 'normal',
  styleText: null,
}

export default Title
