import React from 'react'
import { Title } from '../../../components'

export default {
  title: 'Components/Title',
}

const titles = [
  {
    size: 'small',
    text: 'Small title!',
  },
  {
    size: 'medium',
    text: 'Medium title!',
  },
  {
    size: 'large',
    text: 'Large title!',
  },
]

export const Default = () => titles.map( title => (
  <Title {...title} />
))

export const DefaultBold = () => titles.map( title => (
  <Title {...title} type="bold" />
))
