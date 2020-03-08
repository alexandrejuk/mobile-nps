import React from 'react'
import {
  fireEvent,
  render,
} from '@testing-library/react'

import Card from './'

const props = {
  image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
  title: 'A8/60',
}


describe('Card component', () => {
  it('should render correctly', () => {
  const callback = jest.fn()
    const { container, getByText } = render(
      <Card
        {...props}
        action={callback}
      />
    )

    const SampleCard = getByText(props.title)
    expect(callback).not.toHaveBeenCalled()

    fireEvent.click(SampleCard)

    expect(callback).toHaveBeenCalled()
    expect(container).toMatchSnapshot()
  })
})
