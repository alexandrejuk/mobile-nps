import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '../../../components'

export default {
  title: 'Components/Button',
}

export const Primary = () => (
  <Button
    action={action('clicked')}
    color="primary"
  >
    Primary Button
  </Button>
)

export const Outline = () => (
  <Button
    action={action('clicked')}
    color="outline"
  >
    Outline Button
  </Button>
)
