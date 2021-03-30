import React from 'react'

import Typography, { TypographyVariant } from 'shared/interface/ui/Typography'

import { AnchorContainer } from './styles'
import ArrowIcon from './ArrowIcon'

const Anchor = React.forwardRef(function Link(
  props: React.ComponentPropsWithoutRef<'a'>,
  ref: React.Ref<HTMLAnchorElement>
) {
  const { children, ...rest } = props
  return (
    <AnchorContainer ref={ref} {...rest}>
      <Typography variant={TypographyVariant.Span}>{children}</Typography>
      <ArrowIcon />
    </AnchorContainer>
  )
})

export default React.memo(Anchor)
