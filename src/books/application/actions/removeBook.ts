import { Book } from 'books/domain/Book'
import { BooksCommands } from 'books/application/commands/BooksCommands'

export interface RemoveBookAction {
  type: BooksCommands.BookRemoved
  book: Book
}

export default function removeBook(book: Book): RemoveBookAction {
  return {
    type: BooksCommands.BookRemoved,
    book
  }
}
