import React from 'react'
import { render } from '@testing-library/react'

import Detail from './'

const productMock = {
  description: 'Maquina de café premium, criada com o mais alto padrão de qualidade, lider de venda em mais de 2.000 mil países.',
  deep: 2400,
  id: 3,
  image: 'M860',
  issues: [
    {
      id: 1,
      name: 'off 0',
      problem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum?',
      resolve: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum.',
    },
  ],
  name: 'A6/30',
  height: 100,
  revenues: [
    {
      id: 1,
      src: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
      title: 'AL',
      description: 'Receita blabla',
    }
  ],
  voltage: '220v~/110v~',
  width: 330,
  weight: 1.2,
}

describe('Detail container', () => {
  let DetailContainer
  it('should render correctly', () => {
    const callback = jest.fn()
    DetailContainer = render(
      <Detail
        goBack={callback}
        product={productMock}
      />
    )

    const SampleEquimentCode = DetailContainer.getByText(productMock.name)
    const SampleImgSrc = DetailContainer.getByAltText('product')
    const SampleDescription = DetailContainer.getByText('Descrição')
    const SampleEquimentVoltage = DetailContainer.getByText(productMock.voltage)
    const SampleTitleVoltage = DetailContainer.getByText('Tensão')
    const SampleTitleSize = DetailContainer.getByText('Dimensões')
    const SampleSize = DetailContainer.getByText(`AL: ${productMock.height} x L: ${productMock.width} x P: ${productMock.deep} - Peso: ${productMock.weight}`)

    expect(SampleDescription).toBeInTheDocument()
    expect(SampleTitleSize).toBeInTheDocument()
    expect(SampleTitleVoltage).toBeInTheDocument()
    expect(SampleSize).toBeInTheDocument()
    expect(SampleImgSrc.getAttribute('src')).toEqual('m8-60.png')
    expect(SampleEquimentCode).toBeInTheDocument()
    expect(SampleEquimentVoltage).toBeInTheDocument()
    expect(DetailContainer.container).toMatchSnapshot()
  })
})
