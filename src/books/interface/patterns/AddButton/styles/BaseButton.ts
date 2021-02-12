import styled from 'styled-components'

import Icon from 'books/infra/fontawesome/components/Icon'
import Button from 'ui/Button'

export const BaseButton = styled(Button)`
  ${Icon} {
    font-size: 0.75em;
    margin-right: 8px;
    justify-self: center;
  }
`
