import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import createStoreFromInitialState from 'shared/application/store/createStoreFromInitialState'
import Book from 'books/interface/patterns/Book'
import bookMock from 'books/infra/testing-library/mocks/book'
import differentBookMock from 'books/infra/testing-library/mocks/differentBook'
import cachedState from 'books/infra/testing-library/mocks/cachedState'

export default { title: 'Book/Patterns/Book' }

const standardStore = createStoreFromInitialState({
  ...cachedState,
  books: { ...cachedState.books, saved: [{ ...bookMock, book_uri: differentBookMock.book_uri }] }
})

export const standard = (): React.ReactElement => (
  <ReduxProvider store={standardStore}>
    <Book book={bookMock} />
  </ReduxProvider>
)

const savedBookStore = createStoreFromInitialState(cachedState)

export const bookSaved = (): React.ReactElement => (
  <ReduxProvider store={savedBookStore}>
    <Book book={bookMock} />
  </ReduxProvider>
)

const listViewStore = createStoreFromInitialState({
  ...cachedState,
  view: { view: 'list' }
})

export const listView = (): React.ReactElement => (
  <ReduxProvider store={listViewStore}>
    <Book book={bookMock} />
  </ReduxProvider>
)
