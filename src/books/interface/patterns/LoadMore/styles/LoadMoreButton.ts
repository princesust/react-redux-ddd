import styled from 'styled-components'

import Button from 'shared/interface/ui/Button'

export const LoadMoreButton = styled(Button)`
  width: 300px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.primary.default} 0,
    ${({ theme }) => theme.colors.primary.gradient} 100%
  );
  border-color: ${({ theme }) => theme.colors.primary.default};

  p {
    color: ${({ theme }) => theme.colors.white.default};
  }
`
