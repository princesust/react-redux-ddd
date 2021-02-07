import styled from 'styled-components'

export const Paragraph = styled.p`
  color: ${({ theme, color }) => (color === 'white' ? theme.colors.white.default : theme.colors.black.default)};
  font-size: ${({ theme }) => theme.typography.fontSize.text};
  font-weight: 100;
  letter-spacing: 0.16px;
  line-height: 24px;
`
