import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 130px;
  max-width: ${({ theme }) => theme.devices.laptop};
  padding: 0px ${({ theme }) => theme.padding.vertical};
  margin: 0 auto;
`
