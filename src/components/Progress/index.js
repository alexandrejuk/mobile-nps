import React from 'react'
import PropTypes from 'prop-types'

import Radial from './Radial'

const Progress = ({
  progress,
  setup,
}) => {
  return (
    <Radial
      progress={progress}
      {...setup.radial}
    />
  )
}

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  setup: PropTypes.shape({
    type: PropTypes.oneOf([
      'progress',
      'radial',
    ]).isRequired,
    radial: PropTypes.shape({
      cx: PropTypes.number,
      cy: PropTypes.number,
      r: PropTypes.number,
    }),
  })
}

export default Progress
