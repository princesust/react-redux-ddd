import React from 'react'
import { cleanup } from '@testing-library/react'

import customRender from 'shared/infra/testing-library/helpers/customRender'

import InfoItem from './InfoItem'

describe('UI/InfoItem', () => {
  afterEach(cleanup)

  it('should render properly', () => {
    const { getByText } = customRender(<InfoItem label="Age">21</InfoItem>)
    const value = getByText('Age')
    const label = getByText('21')
    expect(value).toBeDefined()
    expect(label).toBeDefined()
  })
})
