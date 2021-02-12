import React from 'react'

import { Container } from './styles'

interface ShelfContainerProps {
  children: React.ReactNode
}

function ShelfContainer(props: ShelfContainerProps): React.ReactElement {
  const { children } = props
  return <Container>{children}</Container>
}

export default React.memo(ShelfContainer)
