import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import ErrorContainer from '../../../containers/Error'

import GAInitialize from '../../../utils/ga'

const Error = ({
  history,
}) => {
  GAInitialize('/logged/Error')
  return (
    <ErrorContainer goBack={history.goBack} />
  )
}

Error.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Error)
