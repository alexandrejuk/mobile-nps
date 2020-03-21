import React from 'react'
import { render } from '@testing-library/react'

import PracticesContainer from '.'

const practices = [
  {
    id: 1,
    image: 'BannerSvg3',
    title: "Resumo dos Procedimentos para Auditoria TCP",
    readTime: '5-6 minutos de leitura',
  }
]

describe('Practices container', () => {
  it('should render correctly', () => {
    const callback = jest.fn()
    const { container, getByText } = render(
      <PracticesContainer
        goBack={callback}
        goToPractice={callback}
        practices={practices}
      />
    )

    getByText('Read more')
    expect(container).toMatchSnapshot()
  })
})
