import React from 'react'
import { action } from '@storybook/addon-actions'
import { PracticeCard } from '../../../components'

export default {
  title: 'Components/PracticeCard',
}

const props = {
  action: action('card action!'),
  image: 'BannerSvg3',
  title: "Resumo dos Procedimentos para Auditoria TCP",
  readTime: '5-6 minutos de leitura',
}

export const Default = () => (
  <PracticeCard {...props} />
)
