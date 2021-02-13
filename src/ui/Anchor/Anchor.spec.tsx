import React from 'react'
import { cleanup } from '@testing-library/react'

import customRender from 'shared/infra/testing-library/helpers/customRender'

import Anchor from './Anchor'
import { Colors } from 'theme/Theme'

describe('UI/Anchor', () => {
  afterEach(cleanup)

  it('should render according to the theme', () => {
    const { getByText } = customRender(<Anchor>Go to next page</Anchor>)
    const anchor = getByText('Go to next page')
    expect(anchor).toBeDefined()

    expect(anchor).toHaveStyle(`color: ${Colors.primary.default}`)
  })
})
