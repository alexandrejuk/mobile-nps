import React from 'react'
import {
  fireEvent,
  render,
} from '@testing-library/react'

import Equipments from './'

const productsMock = [
  {
    id: 1,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/60',
  },
  {
    id: 2,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A7/30',
  },
  {
    id: 3,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A/50',
  },
  {
    id: 4,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A1/61',
  },
  {
    id: 5,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/6',
  },
]

describe('Equipments container', () => {
  let EquipmentsContainer
  it('should render correctly', async () => {
    const callback = jest.fn()
    EquipmentsContainer = render(
      <Equipments
        action={callback}
        equipments={productsMock}
      />
    )
    const companyLogo = await EquipmentsContainer.findByAltText("company logo")
    const imageItems = await EquipmentsContainer.findAllByAltText("item card")
    const imagesSrc = imageItems.map(image => image.getAttribute("src"))

    const headingItems = EquipmentsContainer
      .getAllByRole('heading')
      .map(({ textContent }) => textContent)

    const SampleEquipment = EquipmentsContainer.getByText(productsMock[0].title)

    expect(callback).not.toHaveBeenCalled()
    fireEvent.click(SampleEquipment)
    expect(callback).toHaveBeenCalled()

    expect(companyLogo.getAttribute("src")).toEqual("logo.svg")
    expect(imagesSrc).toEqual(productsMock.map(({ image }) => image))
    expect(headingItems).toEqual(productsMock.map(({ title }) => title))
    expect(EquipmentsContainer.container).toMatchSnapshot()
  })
})
