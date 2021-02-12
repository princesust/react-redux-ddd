import { BooksState } from './BooksState'
import { ListsState } from './ListsState'
import { ViewState } from './ViewState'

export interface CachedState {
  books: Pick<BooksState, 'saved' | 'offset'>
  filters: Omit<ListsState, 'lists'>
  view: ViewState
}
