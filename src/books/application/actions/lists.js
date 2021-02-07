import bookService from "books/application/services/BookService";

export const getBooks = list => dispatch =>
  bookService.fetchByName(list)
    .then(({ results }) => {
      dispatch({
        type: 'books_loaded',
        books: results.books,
      });
    });

export const saveBookFromList = book => dispatch => {
  const newBook = {
    id: book.primary_isbn13,
    title: book.title,
    author: book.author,
    image_url: book.book_image,
    description: book.description,
  };
  dispatch({ type: 'book_saved_from_list', book: newBook });
};
