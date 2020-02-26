import React from 'react'
import { action } from '@storybook/addon-actions'

import LoginContainer from '../../../containers/Login'

export default {
  title: 'Containers/Login',
}

const handleChangeAction = action('On change')
const handleSubmitAction = action('On submit')

export const Default = () => (
  <LoginContainer
    data={{ code_access: '' }}
    onChange={handleChangeAction}
    onSubmit={handleSubmitAction}
  />
)
