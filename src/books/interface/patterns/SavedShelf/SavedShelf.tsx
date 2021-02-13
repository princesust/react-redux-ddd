import React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { RootState } from 'shared/domain/RootState'

import { ListsState } from 'books/domain/ListsState'
import { BooksState } from 'books/domain/BooksState'
import sortBooksByOption from 'books/application/utils/sortBooksByOption'
import Book from 'books/interface/patterns/Book'
import NoBooksFound from 'books/interface/patterns/NoBooksFound'
import ShelfContainer from 'books/interface/patterns/ShelfContainer'

type SavedShelfStateProps = Pick<BooksState, 'saved'> & Pick<ListsState, 'listSortOption'>

const mapState = (state: RootState): SavedShelfStateProps => ({
  saved: state.books.saved,
  listSortOption: state.filters.listSortOption
})

const connector = connect(mapState)

type SavedShelfProps = ConnectedProps<typeof connector>

function SavedShelf(props: SavedShelfProps): React.ReactElement {
  const { saved: books, listSortOption } = props

  const sortedBooks = React.useMemo(() => {
    if (!books || !books.length) {
      return
    }
    return sortBooksByOption(books, listSortOption)
  }, [books, listSortOption])

  if (!sortedBooks) {
    return <NoBooksFound />
  }

  return (
    <ShelfContainer>
      {sortedBooks.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </ShelfContainer>
  )
}

export default connector(SavedShelf)
