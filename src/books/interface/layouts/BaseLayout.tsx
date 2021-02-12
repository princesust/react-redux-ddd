import React from 'react'

import Banner from 'books/interface/patterns/Banner'
import Headline from 'books/interface/patterns/Headline'
import Controllers from 'books/interface/patterns/Controllers'

interface BaseLayoutProps {
  children: React.ReactNode
  pageTitle?: string
  noControllers?: boolean
}

function BaseLayout(props: BaseLayoutProps): React.ReactElement {
  const { children, pageTitle, noControllers = false } = props
  return (
    <>
      <Banner />
      <Headline title={pageTitle} />
      {!noControllers && <Controllers />}
      {children}
    </>
  )
}

export default React.memo(BaseLayout)
