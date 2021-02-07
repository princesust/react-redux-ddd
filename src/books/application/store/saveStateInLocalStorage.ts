import { BooksInitialState } from 'books/application/reducers'

type SavedBooksState = Pick<BooksInitialState, 'saved'>

export default function saveStateInLocalStorage(state: SavedBooksState): void {
  const serializedState = JSON.stringify(state)
  localStorage.setItem('state', serializedState)
}
