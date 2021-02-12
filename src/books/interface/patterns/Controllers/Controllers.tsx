import React from 'react'

import ViewController from 'books/interface/patterns/ViewController'
import ListFilter from 'books/interface/patterns/ListFilter'
import SortFilter from 'books/interface/patterns/SortFilter'

import { Container, FilterSection } from './styles'

function Controllers(): React.ReactElement {
  return (
    <Container>
      <FilterSection>
        <ListFilter />
        <SortFilter />
      </FilterSection>
      <ViewController />
    </Container>
  )
}

export default React.memo(Controllers)
