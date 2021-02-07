import styled from 'styled-components/macro'

import Icon from 'books/infra/fontawesome/components/Icon'

export const Brandmark = styled(Icon).attrs(() => ({ icon: 'book-open' }))`
  color: ${({ theme }) => theme.colors.primary.default};
  margin: 16px;
  font-size: 40px;
`
