import React from 'react'
import { RouteComponentProps } from '@reach/router'

import BaseLayout from 'books/interface/layouts/BaseLayout'
import Shelf from 'books/interface/patterns/Shelf'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Overview(_props: RouteComponentProps): React.ReactElement {
  return (
    <BaseLayout pageTitle="Discover New Books">
      <Shelf />
    </BaseLayout>
  )
}

export default React.memo(Overview)
