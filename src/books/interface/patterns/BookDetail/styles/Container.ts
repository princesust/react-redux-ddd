import styled from 'styled-components'

export const Container = styled.article`
  display: grid;
  grid-row-gap: 18px;
  grid-column-gap: 60px;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'picture details'
    'button .';
  max-width: ${({ theme }) => theme.devices.laptop};
  padding: ${({ theme }) => theme.padding.horizontal} ${({ theme }) => theme.padding.vertical};
  margin: 0 auto;
`
