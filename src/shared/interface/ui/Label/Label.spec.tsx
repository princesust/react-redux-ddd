import React from 'react'
import { cleanup } from '@testing-library/react'

import customRender from 'shared/infra/testing-library/helpers/customRender'

import Label from './Label'

describe('UI/Label', () => {
  afterEach(cleanup)

  it('should render according to the theme', () => {
    const { getByText } = customRender(<Label>Some label</Label>)
    const label = getByText('Some label')
    expect(label).toBeDefined()

    expect(label).toHaveStyle('font-weight: 600')
  })
})
