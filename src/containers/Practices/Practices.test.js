import React from 'react'
import { render } from '@testing-library/react'

import PracticesContainer from './'

const goodPractices = [
  {
    title: "Guia de boas práticas",
    subtitle: "Resumo dos Procedimentos para Auditoria TCP",
    message: "Material Básico: 5 Copos, 1 Par de luvas, Touca, Jarra, Pincel, Papel toalha, Balança e  Tabela de programação.",
    image: 'PT0',
  },
  {
    title: "Procedimento 1",
    message: "Colocar a touca ao entrar no Ponto.",
    image: 'PT1',
  },
]

describe('Practices container', () => {
  it('should render correctly', () => {
    const callback = jest.fn()
    const step = 0
    const { container, getByText } = render(
      <PracticesContainer
        close={callback}
        onPrevStep={callback}
        onStep={callback}
        step={step}
        steps={(goodPractices.length - 1)}
        practice={goodPractices[step]}
        progress={25}
      />
    )

    getByText('Start')
    expect(container).toMatchSnapshot()
  })
})
