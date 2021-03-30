import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import createStoreFromInitialState from 'shared/application/store/createStoreFromInitialState'
import BookDetail from 'books/interface/patterns/BookDetail'
import bookMock from 'books/infra/testing-library/mocks/book'
import differentBookMock from 'books/infra/testing-library/mocks/differentBook'
import fullRuntimeState from 'books/infra/testing-library/mocks/fullRuntimeState'

export default { title: 'Book/Patterns/BookDetail' }

const standardStore = createStoreFromInitialState({
  ...fullRuntimeState,
  books: { ...fullRuntimeState.books, saved: [{ ...bookMock, book_uri: differentBookMock.book_uri }] }
})

export const standard = (): React.ReactElement => (
  <ReduxProvider store={standardStore}>
    <BookDetail bookId={bookMock.id} />
  </ReduxProvider>
)

const bookSavedStoreStore = createStoreFromInitialState(fullRuntimeState)

export const bookSaved = (): React.ReactElement => (
  <ReduxProvider store={bookSavedStoreStore}>
    <BookDetail bookId={bookMock.id} />
  </ReduxProvider>
)
