import React from 'react'
import { RouteComponentProps } from '@reach/router'

import BaseLayout from 'books/interface/layouts/BaseLayout'
import SavedShelf from 'books/interface/patterns/SavedShelf'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SavedBookShelf(_props: RouteComponentProps): React.ReactElement {
  return (
    <BaseLayout pageTitle="Your saved books">
      <SavedShelf />
    </BaseLayout>
  )
}

export default React.memo(SavedBookShelf)
