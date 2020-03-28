import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const Skeleton = ({
  borderRadius,
  height,
  margin,
  width,
}) => (
  <div
    className={styles.skeleton}
    style={{
      borderRadius,
      height,
      margin,
      width,
    }}
  />
)

Skeleton.propTypes = {
  borderRadius: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
}

Skeleton.defaultProps = {
  borderRadius: '3px',
  height: '20px',
  margin: '4px',
  width: '110px',
}

export default Skeleton
