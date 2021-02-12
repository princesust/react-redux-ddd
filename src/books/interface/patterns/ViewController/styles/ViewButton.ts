import styled from 'styled-components'

export const ViewButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 100px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white.default};
  color: ${({ theme }) => theme.colors.primary.light};
`
