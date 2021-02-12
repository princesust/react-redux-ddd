import { BooksCommands } from 'books/application/commands/BooksCommands'

export interface LoadedAllAction {
  type: BooksCommands.BooksLoadedAll
  loadedAll: boolean
}

export default function loadedAll(loadedAll: boolean): LoadedAllAction {
  return {
    type: BooksCommands.BooksLoadedAll,
    loadedAll
  }
}
