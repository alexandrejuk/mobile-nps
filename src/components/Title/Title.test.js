import React from 'react'
import { render } from '@testing-library/react'

import Title from './'

describe('Title component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Title
        text="I am a title text"
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with small size', () => {
    const { container } = render(
      <Title
        text="I am a title text small"
        size="small"
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with large size', () => {
    const { container } = render(
      <Title
        text="I am a title text large"
        size="large"
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with small size and right text aligin', () => {
    const { container } = render(
      <Title
        text="I am a title text small right align"
        textAlign="right"
        size="small"
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with large size and center text aligin', () => {
    const { container } = render(
      <Title
        text="I am a title text large and center"
        textAlign="center"
        size="large"
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with bold type', () => {
    const { container } = render(
      <Title
        text="I am a title text large"
        type="bold"
      />
    )
    expect(container).toMatchSnapshot()
  })
})
