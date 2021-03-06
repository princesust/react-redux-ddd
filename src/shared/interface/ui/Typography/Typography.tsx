import React from 'react'

import { Paragraph, Title, Subtitle, Span } from './styles'

export enum TypographyVariant {
  Paragraph = 'paragraph',
  Title = 'title',
  Subtitle = 'subtitle',
  Span = 'span'
}

export interface TypographyProps extends React.ComponentPropsWithoutRef<'p' | 'h1' | 'h2' | 'span'> {
  variant?: TypographyVariant
  color?: 'white' | 'black' | 'grey'
}

const Typography = React.forwardRef(function Typography(
  props: TypographyProps,
  ref: React.Ref<HTMLParagraphElement | HTMLHeadingElement>
) {
  const { variant, color = 'black' } = props

  switch (variant) {
    case TypographyVariant.Title:
      return <Title ref={ref} {...props} color={color} />
    case TypographyVariant.Subtitle:
      return <Subtitle ref={ref} {...props} color={color} />
    case TypographyVariant.Span:
      return <Span ref={ref} {...props} color={color} />
    default:
      return <Paragraph ref={ref} {...props} color={color} />
  }
})

export default React.memo(Typography)
