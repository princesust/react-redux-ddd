import React from 'react'
import { Link } from '@reach/router'

import Typography from 'ui/Typography'
import Anchor from 'ui/Anchor'

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
