import { Book } from 'books/domain/Book'
import { ListSortOption } from 'books/domain/ListSortOption'

export default function sortBooksByOption(books: Book[], option: ListSortOption): Book[] {
  return books.sort((a, b) => (a[option] < b[option] ? -1 : a[option] > b[option] ? 1 : 0))
}
