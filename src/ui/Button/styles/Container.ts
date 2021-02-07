import styled from 'styled-components'

export const Container = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.secondary.default};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.secondary.default};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 150px;
  height: 40px;
`
