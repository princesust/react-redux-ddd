import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.default};
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 5px;
  margin-left: 50px;
`
