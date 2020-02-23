import React from 'react'
import { Input } from '../../../components'

export default {
  title: 'Components/Input',
}

export const Default = () => (
  <Input
    label="label"
    name="name"
    type="text"
  />
)

export const Error = () => (
  <Input
    label="Email"
    name="email"
    type="email"
    error="this field is required!"
  />
)
