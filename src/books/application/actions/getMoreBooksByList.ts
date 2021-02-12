import { Dispatch } from 'redux'
import { v4 as uuidv4 } from 'uuid'

import { Book } from 'books/domain/Book'
import bookService from 'books/application/services/BookService'
import booksLoadedStatus from 'books/application/actions/booksLoadedStatus'
import { BooksCommands } from 'books/application/commands/BooksCommands'
import loadedAll from './loadedAll'
import setOffset from './setOffset'

export interface GetMoreBooksByListAction {
  type: BooksCommands.BooksLoadedMore
  books: Book[]
}

export default function getBooksByList(list: string, offset: number) {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(booksLoadedStatus(false))
      const { results } = await bookService.fetchByName(list, offset)
      if (!results.books) {
        dispatch(loadedAll(true))
        dispatch(booksLoadedStatus(true))
        return
      }

      const books = results.books.map(book => ({ ...book, id: uuidv4() }))
      dispatch({ type: BooksCommands.BooksLoadedMore, books })
      dispatch(booksLoadedStatus(true))
      dispatch(setOffset(offset + 20))
    } catch (error) {
      /**
       * Do some error handling. log on Sentry maybe, dispatch a error action
       */
    }
  }
}
