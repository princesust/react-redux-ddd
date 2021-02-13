import styled from 'styled-components/macro'

import Icon from 'shared/infra/fontawesome/components/Icon'

export const Brandmark = styled(Icon).attrs(() => ({ icon: 'book-open' }))`
  color: ${({ theme }) => theme.colors.primary.default};
  margin: 16px 16px 16px 0px;
  font-size: 40px;
`
