import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import PracticeContainer from '../../../containers/Practice'
import goodPractices from '../../../utils/api/practices.mock'

import GAInitialize from '../../../utils/ga'


const Practices = ({
  history,
}) => {
  GAInitialize('/logged/practice')

  return (
    <PracticesContainer
      practices={goodPractices}
    />
  )
}

Practices.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Practices)
