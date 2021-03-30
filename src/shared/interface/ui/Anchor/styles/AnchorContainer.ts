import styled from 'styled-components'

export const AnchorContainer = styled.a`
  text-decoration: none;
  cursor: pointer;

  > svg {
    vertical-align: middle;
    margin-left: 5px;
  }

  > span {
    color: ${({ theme }) => theme.colors.primary.default};
    font-weight: 600;
  }

  padding-bottom: 4px;

  background-repeat: no-repeat;
  background-image: linear-gradient(
      120deg,
      ${({ theme }) => theme.colors.primary.default} 0%,
      ${({ theme }) => theme.colors.primary.default} 100%
    ),
    linear-gradient(120deg, transparent, transparent);
  background-size: 0px 8%, 100% 8%;
  background-position: 0px 100%, 100% 100%;
  transition: background-size ${({ theme }) => theme.transitions.default};

  &:hover {
    background-size: 100% 8%, 100% 8%;
  }
`
