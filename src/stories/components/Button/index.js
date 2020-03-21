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

export const Second = () => (
  <Button
    action={action('clicked')}
    color="secondary"
  >
    Second Button
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


export const SmallPrimary = () => (
  <Button
    action={action('clicked')}
    color="primary"
    size="small"
  >
    Small Primary Button
  </Button>
)

export const SmallSecond = () => (
  <Button
    action={action('clicked')}
    color="secondary"
    size="small"
  >
    Small Second Button
  </Button>
)

export const SmallOutline = () => (
  <Button
    action={action('clicked')}
    color="outline"
    size="small"
  >
    Small Outline Button
  </Button>
)