import bookMock from 'books/infra/testing-library/mocks/book'
import differentBookMock from 'books/infra/testing-library/mocks/differentBook'

import sortBooksByOption from './sortBooksByOption'

describe('when sorting books', () => {
  it('should sort by title option', () => {
    const booksSorted = sortBooksByOption([bookMock, differentBookMock], 'title')
    expect(booksSorted[0].title).toBe(bookMock.title)
  })

  it('should sort by author option', () => {
    const booksSorted = sortBooksByOption([bookMock, differentBookMock], 'author')
    expect(booksSorted[0].author).toEqual(bookMock.author)
  })
})
