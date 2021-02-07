import React from 'react'

import Icon from 'books/infra/fontawesome/components/Icon'
import Typography from 'ui/Typography'

import { TextButton } from './styles'

interface AddButtonProps {
  children: string
}

function AddButton(props: AddButtonProps) {
  const { children } = props
  return (
    <TextButton>
      <Typography>
        <Icon icon="plus" />
        {children}
      </Typography>
    </TextButton>
  )
}

export default React.memo(AddButton)
