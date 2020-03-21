import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const calcProgress = value => (
  value > 0
    ? (440 - 50 * (value / 100))
    : 440
)

const Radial = ({
  cy,
  cx,
  r,
  progress,
}) => (
  <div className={styles.percent}>
    <svg>
      <circle cx={cx} cy={cy} r={r} />
      <circle
        data-value={progress}
        style={{
          strokeDashoffset: calcProgress(progress),
        }}
        cx={cx}
        cy={cy}
        r={r}
      />
    </svg>
  </div>
)

Radial.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
}

export default Radial
