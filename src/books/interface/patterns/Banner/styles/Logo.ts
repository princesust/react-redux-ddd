import styled from 'styled-components/macro'

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey.darkest};
  vertical-align: middle;
  cursor: pointer;
`
