import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

import ShelfContainer from 'books/interface/patterns/ShelfContainer'

function ShelfLoader(): React.ReactElement {
  return (
    <ShelfContainer>
      {Array(8)
        .fill({
          variant: 'rect',
          width: 270,
          height: 351,
          style: { margin: '50px 10px' }
        })
        .map((props, index) => (
          <Skeleton key={index} {...props} />
        ))}
    </ShelfContainer>
  )
}

export default React.memo(ShelfLoader)
