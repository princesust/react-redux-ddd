import styled from 'styled-components'

import Typography from 'shared/interface/ui/Typography'

export const Author = styled(Typography)`
  font-size: 16px;
  line-height: 18px;
  margin: 0 0 8px 0;
  color: ${({ theme }) => theme.colors.grey.darker};
`
