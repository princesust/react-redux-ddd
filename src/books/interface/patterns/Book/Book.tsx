import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'

import { RootState } from 'shared/domain/RootState'

import Typography from 'shared/interface/ui/Typography'

import AddButton from 'books/interface/patterns/AddButton'
import SavedButton from 'books/interface/patterns/SavedButton'
import { Book as BookType } from 'books/domain/Book'
import { ViewState } from 'books/domain/ViewState'
import { BooksState } from 'books/domain/BooksState'
import saveBookFromList from 'books/application/actions/saveBookFromList'
import removeBook from 'books/application/actions/removeBook'

import { Container, Cover, Anchor, Details, Title, Author } from './styles'

interface OwnProps {
  book: BookType
}

type StateBookProps = Pick<BooksState, 'saved'> & ViewState

const mapState = (state: RootState): StateBookProps => ({
  saved: state.books.saved,
  view: state.view.view
})

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      saveBookFromList,
      removeBook
    },
    dispatch
  )

const connector = connect(mapState, mapDispatch)

type BookProps = ConnectedProps<typeof connector> & OwnProps

function Book(props: OwnProps): React.ReactElement {
  const { saved: savedBooks, book, view, saveBookFromList, removeBook } = props as BookProps

  const saved = React.useMemo(() => savedBooks.some(savedBook => savedBook.book_uri === book.book_uri), [
    savedBooks,
    book
  ])

  const handleAddClick = () => {
    saveBookFromList(book)
  }

  const handleRemoveClick = () => {
    removeBook(book)
  }

  return (
    <Container view={view}>
      <Cover>
        <Anchor to={`/books/${book.id}`}>
          <img src={book.book_image} alt={book.title} loading="lazy" />
        </Anchor>
      </Cover>
      <Details>
        <Title>
          <Anchor to={`/books/${book.id}`}>{book.title.toLowerCase()}</Anchor>
        </Title>
        <Author>{book.author}</Author>
        {view === 'list' && <Typography>{book.description}</Typography>}
        {saved && <SavedButton onClick={handleRemoveClick}>Saved to list!</SavedButton>}
        {!saved && <AddButton onClick={handleAddClick}>Save to list</AddButton>}
      </Details>
    </Container>
  )
}

export default connector(Book)
