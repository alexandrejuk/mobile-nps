import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import HomeContainer from '../../../containers/Home'

import GAInitialize from '../../../utils/ga'

const Home = ({
  history,
}) => {
  GAInitialize('/logged/home')

  const gotToPage = page => history.push(`/logged/${page}`)

  return (
    <HomeContainer goToPage={gotToPage} />
  )
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Home)
