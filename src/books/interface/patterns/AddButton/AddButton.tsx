import React from 'react'

import Icon from 'books/infra/fontawesome/components/Icon'

import { BaseButton } from './styles'

const AddButton = React.forwardRef(function AddButton(
  props: React.ComponentPropsWithoutRef<'button'>,
  ref: React.Ref<HTMLButtonElement>
) {
  const { children, ...rest } = props
  return (
    <BaseButton ref={ref} {...rest}>
      <Icon icon="plus" />
      {children}
    </BaseButton>
  )
})

export default React.memo(AddButton)
