import { Book } from 'books/domain/Book'
import { BooksCommands } from 'books/application/commands/BooksCommands'

export interface AddBookAction {
  type: BooksCommands.BookAdded
  book: Book
}

export default function addBook(book: Book): AddBookAction {
  return {
    type: BooksCommands.BookAdded,
    book
  }
}
