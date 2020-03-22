import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { isEmpty } from 'ramda'

import LoginContainer from '../../containers/Login'
import GAInitialize from '../../utils/ga'

const Login = ({
  history,
}) => {
  GAInitialize('/login')
  const access = Number(process.env.REACT_APP_ACCESS_CODE)
  const [data, setData] = useState({
    code_access: '',
  })

  const handleRedirect = (codeAccess) => {
    const { code_access } = codeAccess
    if (access === Number(code_access)) {
      localStorage.setItem('code_access', code_access)
      return history.push('/logged/home')
    }
    return null
  }

  const handleChange = values => setData(values)

  const handleSubmit = (values, formErrors = {}) => {
    return (
      isEmpty(formErrors)
      && handleRedirect(values)
    )
  }

  return (
    <LoginContainer
      data={data}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Login)
