import styled from 'styled-components'

import Icon from 'shared/infra/fontawesome/components/Icon'

export const TextButton = styled.button`
  border: none;
  font-size: ${({ theme }) => theme.typography.fontSize.text};
  background: none;
  color: ${({ theme }) => theme.colors.secondary.light};
  display: flex;
  cursor: pointer;
  ${Icon} {
    font-size: 0.75em;
    margin-top: 1px;
    margin-right: 8px;
  }
`
