import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  max-width: ${({ theme }) => theme.devices.laptop};
  padding: 0px ${({ theme }) => theme.padding.vertical};
  margin: 0 auto;
`
