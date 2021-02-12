import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.primary.default} 0,
    ${({ theme }) => theme.colors.primary.gradient} 100%
  );
  width: 100%;
  min-height: 40px;
  padding: 0px ${({ theme }) => theme.padding.vertical};

  & > h1 {
    line-height: 90px;
    font-size: 36px;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
`
