import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.devices.laptop};
  padding: ${({ theme }) => theme.padding.vertical} ${({ theme }) => theme.padding.vertical};
  margin: 0 auto;
`
