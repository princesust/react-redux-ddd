import { Book } from 'books/domain/Book'
import { BooksCommands } from 'books/application/commands/BooksCommands'

export interface SaveBookFromListAction {
  type: BooksCommands.BookSavedFromList
  book: Book
}

export default function saveBookFromList(book: Book): SaveBookFromListAction {
  return {
    type: BooksCommands.BookSavedFromList,
    book
  }
}
