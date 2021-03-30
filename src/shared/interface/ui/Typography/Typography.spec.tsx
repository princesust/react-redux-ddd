import React from 'react'
import { cleanup } from '@testing-library/react'

import customRender from 'shared/infra/testing-library/helpers/customRender'

import Typography, { TypographyVariant } from './Typography'
import { Colors } from 'shared/interface/theme/Theme'

describe('UI/Typography', () => {
  afterEach(cleanup)

  it('should render according to the theme', () => {
    const { getByText } = customRender(<Typography>some text</Typography>)
    const text = getByText('some text')
    expect(text).toBeDefined()

    expect(text).toHaveStyle(`color: ${Colors.black.default}`)
  })

  it('should render a paragraph', () => {
    const { container } = customRender(<Typography>some text</Typography>)
    const paragraph = container.querySelector('p')

    expect(paragraph).toBeDefined()
  })

  it('should render a span', () => {
    const { container } = customRender(<Typography variant={TypographyVariant.Span}>some text</Typography>)
    const span = container.querySelector('span')

    expect(span).toBeDefined()
  })

  it('should render a title', () => {
    const { container } = customRender(<Typography variant={TypographyVariant.Title}>some text</Typography>)
    const title = container.querySelector('h1')

    expect(title).toBeDefined()
  })

  it('should render a subtitle', () => {
    const { container } = customRender(<Typography variant={TypographyVariant.Subtitle}>some text</Typography>)
    const subtitle = container.querySelector('h2')

    expect(subtitle).toBeDefined()
  })
})
