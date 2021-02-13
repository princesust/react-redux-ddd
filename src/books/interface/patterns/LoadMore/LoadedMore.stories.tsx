import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import { RootState } from 'shared/domain/RootState'

import createStoreFromInitialState from 'store/createStoreFromInitialState'
import LoadMoreButton from 'books/interface/patterns/LoadMore'
import fullRuntimeState from 'books/infra/testing-library/mocks/fullRuntimeState'

export default { title: 'Book/Patterns/LoadMoreButton' }

const standardStore = createStoreFromInitialState({
  ...fullRuntimeState,
  books: { ...fullRuntimeState.books, loadedAll: false }
} as RootState)

export const standard = (): React.ReactElement => (
  <ReduxProvider store={standardStore}>
    <LoadMoreButton />
  </ReduxProvider>
)

const loadingStore = createStoreFromInitialState({
  ...fullRuntimeState,
  books: { ...fullRuntimeState.books, books: [], loadedAll: false, loaded: false }
} as RootState)

export const loading = (): React.ReactElement => (
  <ReduxProvider store={loadingStore}>
    <LoadMoreButton />
  </ReduxProvider>
)
