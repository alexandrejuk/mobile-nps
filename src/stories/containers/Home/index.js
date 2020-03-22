import React from 'react'
import { action } from '@storybook/addon-actions'

import HomeContainer from '../../../containers/Home'

export default {
  title: 'Containers/Home',
}

export const Default = () => (
  <HomeContainer goToPage={action('go to page')} />
)
