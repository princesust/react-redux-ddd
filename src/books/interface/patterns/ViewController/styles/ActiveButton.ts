import styled from 'styled-components'

export const ActiveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.primary.lightest};
  color: ${({ theme }) => theme.colors.primary.default};
`
