import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

export const Loader = styled(CircularProgress)`
  .MuiCircularProgress-svg {
    color: ${({ theme }) => theme.colors.white.default};
    > svg {
      margin-top: 6px;
    }
  }
`
