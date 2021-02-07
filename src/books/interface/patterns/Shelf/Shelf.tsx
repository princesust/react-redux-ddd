import React from 'react'

import { Book } from 'books/domain/Book'

import { Container } from './styles'

interface ShelfProps {
  books?: Book[]
}

function Shelf(props: ShelfProps): React.ReactElement {
  const { books } = props
  return (
    <Container>
      {/* {books
        .sort(({ [sortBy]: a }, { [sortBy]: b }) => (a < b ? -1 : a > b ? 1 : 0))
        .map(book => (
          <Book
            view={view}
            book={{
              id: book.primary_isbn13,
              title: book.title,
              image_url: book.book_image,
              description: book.description,
              author: book.author
            }}
            actions={actions}
            onSave={() => {
              actions.saveBookFromList(book)
            }}
            onRemove={() => actions.removeBook(saved.find(({ id }) => id === book.primary_isbn13))}
            saved={saved.some(({ id }) => id === book.primary_isbn13)}
          />
        ))} */}
    </Container>
  )
}

export default Shelf
