import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import Login from '../../../containers/Login'

export default {
  title: 'Containers/Login',
}

const handleChangeAction = action('On change')
const handleSubmitAction = action('On submit')
const handleRedirectAction = action('On redirect')

export const Default = () => {
  const [data, setData] = useState({
    code_access: '',
  })

  const handleRedirect = (values) => {
    return handleRedirectAction(values)
  }

  const handleChange = values => {
    setData(values)
    return handleChangeAction(values)
  }

  const handleSubmit = (values, formErrors = {}) => {
    handleSubmitAction(values)
    return (
      isEmpty(formErrors)
      && handleRedirect(values)
    )
  }

  return (
    <Login
      data={data}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}
