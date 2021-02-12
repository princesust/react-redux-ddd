import { Book } from './Book'

export interface BooksState {
  books: Book[]
  saved: Book[]
  loaded: boolean
  offset: number
  loadedAll: boolean
}
