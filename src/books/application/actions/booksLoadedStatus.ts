import { BooksCommands } from 'books/application/commands/BooksCommands'

export interface BooksLoadedStatusAction {
  type: BooksCommands.BooksLoadedStatus
  status: boolean
}

export default function booksLoaded(status: boolean): BooksLoadedStatusAction {
  return {
    type: BooksCommands.BooksLoadedStatus,
    status
  }
}
