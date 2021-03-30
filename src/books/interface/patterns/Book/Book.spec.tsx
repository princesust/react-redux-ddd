import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { cleanup, fireEvent, waitFor } from '@testing-library/react'

import customRender from 'shared/infra/testing-library/helpers/customRender'

import fullRuntimeState from 'books/infra/testing-library/mocks/fullRuntimeState'
import bookMock from 'books/infra/testing-library/mocks/book'
import differentBookMock from 'books/infra/testing-library/mocks/differentBook'
import createStoreFromInitialState from 'shared/application/store/createStoreFromInitialState'

import Book from './Book'

describe('when a book component is ready', () => {
  afterEach(cleanup)

  it('should save a book', async () => {
    const savedBooks = [differentBookMock]
    const store = createStoreFromInitialState({
      ...fullRuntimeState,
      books: { ...fullRuntimeState.books, saved: savedBooks }
    })

    const { queryByTestId, queryByText } = customRender(
      <ReduxProvider store={store}>
        <Book book={bookMock} />
      </ReduxProvider>
    )
    const button = queryByTestId('add-button') as HTMLButtonElement
    expect(queryByText('Save to list')).toBeDefined()
    expect(queryByText('Saved to list!')).toBe(null)

    fireEvent.click(button)

    await waitFor(() => {
      expect(queryByText('Saved to list!')).toBeDefined()
    })
  })

  it('should unsave a book', async () => {
    const savedBooks = [bookMock]
    const store = createStoreFromInitialState({
      ...fullRuntimeState,
      books: { ...fullRuntimeState.books, saved: savedBooks }
    })

    const { queryByTestId, queryByText } = customRender(
      <ReduxProvider store={store}>
        <Book book={bookMock} />
      </ReduxProvider>
    )
    const button = queryByTestId('saved-button') as HTMLButtonElement
    expect(queryByText('Saved to list!')).toBeDefined()
    expect(queryByText('Save to list')).toBe(null)

    fireEvent.click(button)

    await waitFor(() => {
      expect(queryByText('Save to list')).toBeDefined()
    })
  })
})
