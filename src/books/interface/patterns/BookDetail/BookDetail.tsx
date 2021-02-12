import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'

import { RootState } from 'store/RootState'
import InfoItem from 'ui/InfoItem'
import Typography, { TypographyVariant } from 'ui/Typography'
import { BooksState } from 'books/domain/BooksState'
import saveBookFromList from 'books/application/actions/saveBookFromList'
import removeBook from 'books/application/actions/removeBook'
import NoBooksFound from 'books/interface/patterns/NoBooksFound'

import { Container, Picture, Info, AddButton, SavedButton, Header, Description, Details, InfoValue } from './styles'

type OwnProps = {
  bookId: string
}

type StateBookDetailProps = Pick<BooksState, 'books' | 'loaded' | 'saved'>

const mapState = (state: RootState): StateBookDetailProps => ({
  books: state.books.books,
  loaded: state.books.loaded,
  saved: state.books.saved
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

type BookDetailProps = ConnectedProps<typeof connector> & OwnProps

function BookDetail(props: BookDetailProps): React.ReactElement {
  const { saved: savedBooks, bookId, books, loaded, saveBookFromList, removeBook } = props

  const handleAddClick = () => {
    if (book) {
      saveBookFromList(book)
    }
  }

  const handleRemoveClick = () => {
    if (book) {
      removeBook(book)
    }
  }

  const book = React.useMemo(() => {
    if (loaded && books) {
      return books.find(book => book.id === bookId)
    }
  }, [books, bookId, loaded])

  const isbn13 = React.useMemo(() => {
    if (book) {
      const isbn13index = book.isbns.findIndex(isbn => 'isbn13' in isbn)
      return book.isbns[isbn13index].isbn13 || 'None'
    }
  }, [book])

  const saved = React.useMemo(() => {
    if (book) {
      return savedBooks.some(savedBook => savedBook.book_uri === book.book_uri)
    }
  }, [savedBooks, book])

  if (!book) {
    return <NoBooksFound />
  }

  return (
    <Container>
      <Picture alt={book.title} src={book.book_image} loading="lazy" />
      {saved && <SavedButton onClick={handleRemoveClick}>Saved to list!</SavedButton>}
      {!saved && <AddButton onClick={handleAddClick}>Save to list</AddButton>}
      <Info>
        <Header>
          <Typography variant={TypographyVariant.Title}>{book.title}</Typography>
          <InfoValue>{book.author}</InfoValue>
        </Header>
        <Description>
          <Typography variant={TypographyVariant.Subtitle}>Description</Typography>
          <InfoValue>{book.description}</InfoValue>
        </Description>
        <Details>
          <Typography variant={TypographyVariant.Subtitle}>Details</Typography>
          <InfoItem label="Publisher:">{book.publisher || 'None'}</InfoItem>
          <InfoItem label="ISBN13:">{isbn13}</InfoItem>
          <InfoItem label="Best Sellers Rank Backman:">{book.rank || 'None'}</InfoItem>
          <InfoItem label="Weeks on Best Sellers List:">{book.weeks_on_list || 'None'}</InfoItem>
        </Details>
      </Info>
    </Container>
  )
}

export default connector(BookDetail)
