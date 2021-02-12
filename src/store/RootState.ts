import { BooksState } from 'books/domain/BooksState'
import { ListsState } from 'books/domain/ListsState'
import { ViewState } from 'books/domain/ViewState'

export interface RootState {
  books: BooksState
  filters: ListsState
  view: ViewState
}
