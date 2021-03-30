import React from 'react'
import { Link } from '@reach/router'

import Typography from 'shared/interface/ui/Typography'
import Anchor from 'shared/interface/ui/Anchor'

import { Container } from './styles'

function NoBooksFound(): React.ReactElement {
  return (
    <Container>
      <Typography>No books found.</Typography>
      <Link to="/">
        <Anchor>Try again</Anchor>
      </Link>
    </Container>
  )
}

export default React.memo(NoBooksFound)
