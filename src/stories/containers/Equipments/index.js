import React from 'react'
import { action } from '@storybook/addon-actions'
import Equipments from '../../../containers/Equipments'

export default {
  title: 'Containers/Equipments',
}

const equipments = [
  {
    action: action('card action!'),
    id: 1,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/60',
  },
  {
    action: action('card action!'),
    id: 2,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/60',
  },
  {
    action: action('card action!'),
    id: 3,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/60',
  },
  {
    action: action('card action!'),
    id: 4,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/60',
  },
  {
    action: action('card action!'),
    id: 5,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/60',
  },
]

export const Default = () => (
  <Equipments
    equipments={equipments || []}
  />
)
