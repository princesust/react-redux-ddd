import React from 'react'

import Typography, { TypographyVariant } from 'shared/interface/ui/Typography'

import { Container } from './styles'

interface HeadlineProps {
  title?: string
}

function Headline(props: HeadlineProps): React.ReactElement {
  const { title } = props
  return (
    <Container>
      <Typography variant={TypographyVariant.Title}>{title}</Typography>
    </Container>
  )
}

export default React.memo(Headline)
