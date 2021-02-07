import React from 'react'
import { RouteComponentProps } from '@reach/router'

import BaseLayout from 'books/interface/layouts/BaseLayout'
// import Filter from 'books/interface/patterns/Filter'
import Shelf from 'books/interface/patterns/Shelf'

function Overview(_props: RouteComponentProps): React.ReactElement {
  return (
    <BaseLayout pageTitle="Discover New Books">
      {/* <Filter /> */}
      <Shelf />
    </BaseLayout>
  )
}

export default React.memo(Overview)
