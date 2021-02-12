/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { RouteComponentProps, useParams } from '@reach/router'

import BaseLayout from 'books/interface/layouts/BaseLayout'
import BookDetail from 'books/interface/patterns/BookDetail'

interface BookDetailsParams {
  bookId: string
}

function BookDetails(_props: RouteComponentProps): React.ReactElement {
  const { bookId } = useParams() as BookDetailsParams

  return (
    <BaseLayout noControllers>
      <BookDetail bookId={bookId} />
    </BaseLayout>
  )
}

export default React.memo(BookDetails)
