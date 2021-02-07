import styled from 'styled-components'

export const Title = styled.h1`
  color: ${({ theme, color }) => (color === 'white' ? theme.colors.white.default : theme.colors.black.default)};
  font-size: ${({ theme }) => theme.typography.fontSize.title};
  font-weight: 700;
  line-height: 48px;
`
