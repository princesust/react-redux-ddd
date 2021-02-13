import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { cleanup } from '@testing-library/react'

import customRender from 'shared/infra/testing-library/helpers/customRender'
import { RootState } from 'shared/domain/RootState'

import fullRuntimeState from 'books/infra/testing-library/mocks/fullRuntimeState'
import bookMock from 'books/infra/testing-library/mocks/book'
import differentBookMock from 'books/infra/testing-library/mocks/differentBook'
import createStoreFromInitialState from 'store/createStoreFromInitialState'

import Shelf from './Shelf'

describe('when loading books in the shelf', () => {
  afterEach(cleanup)

  it('should render all intial books', () => {
    const store = createStoreFromInitialState(fullRuntimeState)
    const getBooksByList = jest.fn()
    store.dispatch = getBooksByList

    const { getByText } = customRender(
      <ReduxProvider store={store}>
        <Shelf />
      </ReduxProvider>
    )
    const firstBook = getByText(bookMock.title.toLocaleLowerCase())
    const secondBook = getByText(differentBookMock.title.toLocaleLowerCase())

    expect(firstBook).toBeDefined()
    expect(secondBook).toBeDefined()
    expect(getBooksByList).toHaveBeenCalled()
  })

  it('should render in loading state', () => {
    const store = createStoreFromInitialState({
      ...fullRuntimeState,
      books: { ...fullRuntimeState.books, loaded: false }
    } as RootState)

    const { container } = customRender(
      <ReduxProvider store={store}>
        <Shelf />
      </ReduxProvider>
    )

    const elements = container.querySelectorAll('.MuiSkeleton-root')
    expect(elements.length).toBeTruthy()
  })

  it('should see the list in list mode', () => {
    const store = createStoreFromInitialState({
      ...fullRuntimeState,
      view: { ...fullRuntimeState.view, view: 'list' }
    } as RootState)
    const getBooksByList = jest.fn()
    store.dispatch = getBooksByList

    const { getByText } = customRender(
      <ReduxProvider store={store}>
        <Shelf />
      </ReduxProvider>
    )
    const book = getByText(bookMock.description)
    expect(getBooksByList).toHaveBeenCalled()

    expect(book).toBeDefined()
  })
})
