import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react'

import customRender from 'shared/infra/testing-library/helpers/customRender'

import Button from './Button'
import { Colors } from 'shared/interface/theme/Theme'

describe('UI/Button', () => {
  afterEach(cleanup)

  it('should render according to the theme', () => {
    const { getByText } = customRender(<Button>Save</Button>)
    const button = getByText('Save')
    expect(button).toBeDefined()

    expect(button).toHaveStyle(`color: ${Colors.secondary.default}`)
  })

  it('should trigger a click', () => {
    const onClick = jest.fn()
    const { getByText } = customRender(<Button onClick={onClick}>Save</Button>)
    const button = getByText('Save')
    expect(button).toBeDefined()

    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
})
