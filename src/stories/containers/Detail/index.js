import React from 'react'
import { action } from '@storybook/addon-actions'
import Detail from '../../../containers/Detail'

export default {
  title: 'Containers/Detail',
}

const product =   {
  description: 'Maquina de café premium, criada com o mais alto padrão de qualidade, lider de venda em mais de 2.000 mil países.',
  deep: 2400,
  id: 3,
  image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
  issues: [
    {
      id: 1,
      name: 'off 0',
      problem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum?',
      resolve: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum.',
    },
    {
      id: 2,
      name: 'off 1',
      problem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum?',
      resolve: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum.',
    },
  ],
  name: 'A6/30',
  height: 100,
  revenues: [
    {
      src: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
      title: 'AL',
      description: 'Receita blabla',
    },
    {
      src: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
      title: 'P',
      description: 'Receita blabla',
    },
  ],
  voltage: '220v~/110v~',
  width: 330,
  weight: 1.2,
}

export const Default = () => (
  <Detail
    goBack={action('go back!')}
    product={product}
  />
)
