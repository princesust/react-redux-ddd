import React from 'react'
import { navigate } from '@reach/router'

import { Container, Logo, Brandmark, StyledLink } from './styles'

function Banner() {
  const handleLogoClick = () => navigate('/')

  return (
    <Container>
      <Logo onClick={handleLogoClick}>
        <Brandmark />
        NYT Books
      </Logo>
      <StyledLink to="saved">Saved Books</StyledLink>
    </Container>
  )
}

export default React.memo(Banner)
