import React from 'react'
import { action } from '@storybook/addon-actions'
import ErrorContainer from '../../../containers/Error'

export default {
  title: 'Containers/Error',
}

export const Default = () => (
  <ErrorContainer goBack={action('go back!')} />
)
