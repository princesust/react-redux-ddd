/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { BooksState } from 'books/domain/BooksState'
import { BooksAction } from 'books/domain/BooksAction'
import { BooksCommands } from '../commands/BooksCommands'

const initialState = {
  books: [],
  saved: [],
  loaded: false,
  offset: 0,
  loadedAll: false
}

export default function reducer(state: BooksState = initialState, action: BooksAction): BooksState {
  switch (action.type) {
    case BooksCommands.BooksLoaded: {
      return { ...state, books: [...action.books] }
    }
    case BooksCommands.BooksLoadedMore: {
      const books = [...state.books, ...action.books]
      return { ...state, books }
    }
    case BooksCommands.BooksLoadedStatus:
      return { ...state, loaded: action.status }
    case BooksCommands.SetOffset:
      return { ...state, offset: action.offset }
    case BooksCommands.BooksLoadedAll:
      return { ...state, loadedAll: action.loadedAll }
    case BooksCommands.BookAdded:
      return {
        ...state,
        saved: state.saved.concat(action.book)
      }
    case BooksCommands.BookSavedFromList:
      return {
        ...state,
        saved: [...state.saved, action.book]
      }
    case BooksCommands.BookRemoved: {
      const bookToRemove = state.saved.find(({ id }) => id === action.book.id)!
      const newSavedState = state.saved.filter(({ id }) => id !== bookToRemove.id)
      return {
        ...state,
        saved: newSavedState
      }
    }
    default:
      return state
  }
}
