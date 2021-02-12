import { Dispatch } from 'redux'
import { v4 as uuidv4 } from 'uuid'

import { Book } from 'books/domain/Book'
import bookService from 'books/application/services/BookService'
import booksLoadedStatus from 'books/application/actions/booksLoadedStatus'
import { BooksCommands } from 'books/application/commands/BooksCommands'

export interface GetBooksByListAction {
  type: BooksCommands.BooksLoaded
  books: Book[]
}

export default function getBooksByList(list: string) {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(booksLoadedStatus(false))
      const { results } = await bookService.fetchByName(list)
      const books = results.books.map(book => ({ ...book, id: uuidv4() }))
      dispatch({ type: BooksCommands.BooksLoaded, books })
      dispatch(booksLoadedStatus(true))
    } catch (error) {
      /**
       * Do some error handling. log on Sentry maybe, dispatch a error action
       */
    }
  }
}
