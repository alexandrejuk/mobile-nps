import React from 'react'
import { action } from '@storybook/addon-actions'
import PracticesContainer from '../../../containers/Practices'

import goodPractices from '../../../utils/api/practices.mock'

export default {
  title: 'Containers/Practices',
}

export const Default = () => (
  <PracticesContainer
    goBack={action('go back!')}
    goToPractice={action('go to practice!')}
    practices={goodPractices}
  />
)
