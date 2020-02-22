import React from 'react'
import { action } from '@storybook/addon-actions'
import { Card } from '../../../components'

export default {
  title: 'Components/Card',
}

const props = {
  action: action('clicked'),
  image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
  title: 'A8/60',
}

export const Default = () => (
  <Card {...props} />
)
