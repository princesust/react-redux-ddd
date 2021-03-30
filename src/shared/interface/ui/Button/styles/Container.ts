import styled from 'styled-components'

export const Container = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.secondary.default};
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white.default};
  color: ${({ theme }) => theme.colors.secondary.default};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 150px;
  height: 40px;
  cursor: pointer;

  p {
    color: ${({ theme }) => theme.colors.secondary.default};
  }
`
