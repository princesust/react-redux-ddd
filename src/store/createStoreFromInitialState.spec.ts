import cachedState from 'books/infra/testing-library/mocks/cachedState'
import fullRuntimeState from 'books/infra/testing-library/mocks/fullRuntimeState'

import createStoreFromInitialState from './createStoreFromInitialState'
describe('when creating a store', () => {
  it('should return the initial cached state', () => {
    const store = createStoreFromInitialState(cachedState)
    const state = store.getState()
    expect(state).toHaveProperty('books')
    expect(state).toHaveProperty('filters')
    expect(state).toHaveProperty('view')

    const { books, filters, view } = state

    expect(books).toHaveProperty('saved')
    expect(books).toHaveProperty('offset')

    expect(filters).toHaveProperty('listSelected')
    expect(filters).toHaveProperty('listSortOption')

    expect(view).toHaveProperty('view')
  })

  it('should return the runtime state', () => {
    const store = createStoreFromInitialState(fullRuntimeState)
    const state = store.getState()
    const { books, filters, view } = state

    expect(books).toHaveProperty('books')
    expect(books).toHaveProperty('saved')
    expect(books).toHaveProperty('offset')
    expect(books).toHaveProperty('loaded')
    expect(books).toHaveProperty('loadedAll')

    expect(filters).toHaveProperty('lists')
    expect(filters).toHaveProperty('listSortOption')
    expect(filters).toHaveProperty('listSortOption')

    expect(view).toHaveProperty('view')
  })
})
