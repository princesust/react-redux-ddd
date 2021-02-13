import React from 'react'

import Icon from 'shared/infra/fontawesome/components/Icon'

import { TextButton } from './styles'

const SavedButton = React.forwardRef(function AddButton(
  props: React.ComponentPropsWithoutRef<'button'>,
  ref: React.Ref<HTMLButtonElement>
) {
  const { children, ...rest } = props
  return (
    <TextButton ref={ref} {...rest} data-testid="saved-button">
      <Icon icon="plus" />
      {children}
    </TextButton>
  )
})

export default React.memo(SavedButton)
