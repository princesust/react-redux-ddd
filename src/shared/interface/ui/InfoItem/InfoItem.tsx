import React from 'react'

import Typography from 'shared/interface/ui/Typography'
import Label from 'shared/interface/ui/Label'

import { Container, Info } from './styles'

interface InfoItemProps {
  label: string
  children: React.ReactNode
}

function InfoItem(props: InfoItemProps): React.ReactElement {
  const { label, children } = props

  return (
    <Container>
      <Label>{label}</Label>
      <Info>
        <Typography>{children}</Typography>
      </Info>
    </Container>
  )
}

export default React.memo(InfoItem)
