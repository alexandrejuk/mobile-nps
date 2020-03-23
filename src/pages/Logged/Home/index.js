import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import HomeContainer from '../../../containers/Home'

import GAInitialize from '../../../utils/ga'

const Home = ({
  history,
}) => {
  GAInitialize('/logged/home')
  const [show, setShow] = useState(false)

  const gotToPage = page => history.push(`/logged/${page}`)

  const showModal = () => setShow(true)
  const closeModal = () => setShow(false)

  const logout = () => {
    localStorage.clear()
    history.push('/')
    closeModal()
  }

  return (
    <HomeContainer
      closeModal={closeModal}
      goToPage={gotToPage}
      logout={logout}
      show={show}
      showModal={showModal}
    />
  )
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Home)
