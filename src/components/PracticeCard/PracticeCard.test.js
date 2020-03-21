import React from 'react'
import {
  fireEvent,
  render,
} from '@testing-library/react'

import PracticeCard from './'

const props = {
  image: 'BannerSvg3',
  title: "Resumo dos Procedimentos para Auditoria TCP",
  readTime: '5-6 minutos de leitura',
}


describe('PracticeCard component', () => {
  it('should render correctly', () => {
  const callback = jest.fn()
    const { container, getByText, getByAltText } = render(
      <PracticeCard
        {...props}
        action={callback}
      />
    )

    const imageCard = getByAltText("item card")
    const SampleCard = getByText(props.title)
    expect(callback).not.toHaveBeenCalled()

    fireEvent.click(SampleCard)

    expect(SampleCard.innerHTML).toEqual(props.title)
    expect(imageCard.getAttribute('src')).toEqual('banner-3.svg')
    expect(callback).toHaveBeenCalled()
    expect(container).toMatchSnapshot()
  })
})
