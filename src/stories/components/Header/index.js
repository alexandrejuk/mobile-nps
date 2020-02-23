import React from 'react'
import { action } from '@storybook/addon-actions'
import { Header } from '../../../components'

export default {
  title: 'Components/Header',
}

export const Default = () => (
  <Header
    action={action('go back!')}
  />
)
