import React from 'react'
import { render } from '@testing-library/react'

import Card from './'

const props = {
  action: () => {},
  image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
  title: 'A8/60',
}


describe('Card component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Card {...props} />
    )
    expect(container).toMatchSnapshot()
  })
})