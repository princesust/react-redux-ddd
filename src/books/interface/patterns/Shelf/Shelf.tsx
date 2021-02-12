import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'

import { RootState } from 'store/RootState'
import { ListsState } from 'books/domain/ListsState'
import { BooksState } from 'books/domain/BooksState'
import getBooksByList from 'books/application/actions/getBooksByList'
import sortBooksByOption from 'books/application/utils/sortBooksByOption'
import LoadMore from 'books/interface/patterns/LoadMore'
import Book from 'books/interface/patterns/Book'
import ShelfContainer from 'books/interface/patterns/ShelfContainer'
import ShelfLoader from 'books/interface/patterns/ShelfLoader'

type StateShelfProps = Pick<BooksState, 'books' | 'loaded'> & Pick<ListsState, 'listSelected' | 'listSortOption'>

const mapState = (state: RootState): StateShelfProps => ({
  books: state.books.books,
  listSelected: state.filters.listSelected,
  loaded: state.books.loaded,
  listSortOption: state.filters.listSortOption
})

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getBooksByList
    },
    dispatch
  )

const connector = connect(mapState, mapDispatch)

type ShelfProps = ConnectedProps<typeof connector>

function Shelf(props: ShelfProps): React.ReactElement {
  const { listSelected, books, getBooksByList, loaded, listSortOption } = props

  React.useEffect(() => {
    getBooksByList(listSelected)
  }, [getBooksByList, listSelected])

  const sortedBooks = React.useMemo(() => {
    if (loaded && books && listSortOption) {
      return sortBooksByOption(books, listSortOption)
    }
    return books
  }, [books, listSortOption, loaded])

  if (!loaded) {
    return <ShelfLoader />
  }

  return (
    <ShelfContainer>
      {sortedBooks.map(book => (
        <Book key={book.id} book={book} />
      ))}
      <LoadMore />
    </ShelfContainer>
  )
}

export default connector(Shelf)
