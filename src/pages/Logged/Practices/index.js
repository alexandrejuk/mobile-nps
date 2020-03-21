import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import PracticesContainer from '../../../containers/Practices'
import goodPractices from '../../../utils/api/practices.mock'

import GAInitialize from '../../../utils/ga'


const Practices = ({
  history,
}) => {
  GAInitialize('/logged/practice')

  const goToPractice = id => history.push(`/logged/practices/${id}`)

  return (
    <PracticesContainer
      practices={goodPractices}
      goBack={history.goBack}
      goToPractice={goToPractice}
    />
  )
}

Practices.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Practices)
