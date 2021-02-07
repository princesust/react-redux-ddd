import { BooksInitialState } from 'books/application/reducers'

export default function loadStateFromLocalStorage(): BooksInitialState | null {
  const serializedState = localStorage.getItem('state')
  if (!serializedState) {
    return null
  }
  return JSON.parse(serializedState)
}
