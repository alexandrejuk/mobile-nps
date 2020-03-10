import React from 'react'
import {
  fireEvent,
  render,
} from '@testing-library/react'

import Equipments from './'

const productsMock = [
  {
    id: 1,
    image: 'M860',
    name: 'A8/60',
  },
  {
    id: 2,
    image: 'M860',
    name: 'A7/30',
  },
  {
    id: 3,
    image: 'M860',
    name: 'A/50',
  },
  {
    id: 4,
    image: 'M860',
    name: 'A1/61',
  },
  {
    id: 5,
    image: 'M860',
    name: 'A8/6',
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

    const SampleEquipment = EquipmentsContainer.getByText(productsMock[0].name)

    expect(callback).not.toHaveBeenCalled()
    fireEvent.click(SampleEquipment)
    expect(callback).toHaveBeenCalled()

    expect(companyLogo.getAttribute("src")).toEqual("logo.svg")
    expect(imagesSrc).toEqual(productsMock.map(() => `m8-60.png`))
    expect(headingItems).toEqual(productsMock.map(({ name }) => name))
    expect(EquipmentsContainer.container).toMatchSnapshot()
  })
})
