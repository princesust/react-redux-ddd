import { Book } from 'books/domain/Book'

export interface BooksInitialState {
  books: Book[]
  saved: Book[]
}
const initialState = {
  books: [],
  saved: []
}

export default function reducer(state: BooksInitialState = initialState, action: any) {
  switch (action.type) {
    case 'books_loaded':
      return { ...state, books: action.books }
    case 'book_added':
      return {
        ...state,
        saved: state.saved.concat(action.book)
      }
    case 'book_saved_from_list':
      return {
        ...state,
        saved: [...state.saved, action.book]
      }
    case 'book_removed': {
      const indexToRemove = state.saved.findIndex(({ id }) => id === action.book.id)
      state.saved.splice(indexToRemove, 1)
      return state
    }

    default:
      return state
  }
}
