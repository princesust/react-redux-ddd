import { AddBookAction } from 'books/application/actions/addBook'
import { BooksLoadedStatusAction } from 'books/application/actions/booksLoadedStatus'
import { GetBooksByListAction } from 'books/application/actions/getBooksByList'
import { GetMoreBooksByListAction } from 'books/application/actions/getMoreBooksByList'
import { RemoveBookAction } from 'books/application/actions/removeBook'
import { SaveBookFromListAction } from 'books/application/actions/saveBookFromList'
import { LoadedAllAction } from 'books/application/actions/loadedAll'
import { SetOffsetAction } from 'books/application/actions/setOffset'

export type BooksAction =
  | AddBookAction
  | GetBooksByListAction
  | GetMoreBooksByListAction
  | RemoveBookAction
  | SaveBookFromListAction
  | BooksLoadedStatusAction
  | LoadedAllAction
  | SetOffsetAction
