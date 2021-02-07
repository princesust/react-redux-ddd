import React from 'react'

import Banner from 'books/interface/patterns/Banner'
import Headline from 'books/interface/patterns/Headline'

interface BaseLayoutProps {
  children: React.ReactNode
  pageTitle?: string
}

function BaseLayout(props: BaseLayoutProps): React.ReactElement {
  const { children, pageTitle } = props
  return (
    <>
      <Banner />
      <Headline title={pageTitle} />
      {children}
    </>
  )
}

export default React.memo(BaseLayout)
