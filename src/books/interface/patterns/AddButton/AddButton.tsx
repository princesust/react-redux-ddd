import React from 'react'

import Icon from 'books/infra/fontawesome/components/Icon'
import Typography from 'ui/Typography'

import { BaseButton } from './styles'

interface AddButtonProps {
  children: string
}

function AddButton(props: AddButtonProps) {
  const { children } = props
  return (
    <BaseButton>
      <Typography>
        <Icon icon="plus" />
        {children}
      </Typography>
    </BaseButton>
  )
}

export default React.memo(AddButton)
