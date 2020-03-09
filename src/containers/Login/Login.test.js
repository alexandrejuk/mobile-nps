import React from 'react'
import {
  fireEvent,
  render,
} from '@testing-library/react'

import Login from './'

describe('Login container', () => {
  let LoginContainer = null
  it('should render correctly', () => {
    const callback = jest.fn()
    LoginContainer = render(
      <Login
        data={{ code_access: '' }}
        onChange={callback}
        onSubmit={callback}
      />
    )

    const SampleButton = LoginContainer.getByText('Entrar')

    expect(callback).not.toHaveBeenCalled()
    fireEvent.click(SampleButton)
    expect(callback).toHaveBeenCalled()
    expect(
      LoginContainer
        .getByAltText('company logo')
        .getAttribute('src')
    ).toEqual('logo.svg')
    expect(LoginContainer.getByText('Código')).toBeInTheDocument()
    expect(LoginContainer.container).toMatchSnapshot()
  })
})
