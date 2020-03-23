import React from 'react'
import { action } from '@storybook/addon-actions'
import Equipments from '../../../containers/Equipments'

export default {
  title: 'Containers/Equipments',
}

const equipments = [
  {
    id: 1,
    image: 'FTP60E',
    name: 'A8/60',
  },
  {
    id: 2,
    image: 'FTP60E',
    name: 'A8/60',
  },
  {
    id: 3,
    image: 'FTP60E',
    name: 'A8/60',
  },
  {
    id: 4,
    image: 'FTP60E',
    name: 'A8/60',
  },
  {
    id: 5,
    image: 'FTP60E',
    name: 'A8/60',
  },
]

export const Default = () => (
  <Equipments
    goBack={action('go back!')}
    action={action('card action!')}
    equipments={equipments || []}
  />
)
