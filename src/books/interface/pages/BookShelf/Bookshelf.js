import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useNavigate, useLocation } from '@reach/router';
import { Button } from './Buttons';
import Icon from './Icon';
import Page from './Page';
import Book from './Book';

const Shelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 1080px;
  margin: 0 auto;
`;

export default function Bookshelf({ books, actions, saved }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [, view] = location.search.match(/view=(grid|list)/) || [];
  const [sortBy, setSortBy] = useState('title');

  const Sorter = (
    <label>
      Sort by&nbsp;
      <select onChange={e => setSortBy(e.target.value)} value={sortBy}>
        <option>title</option>
        <option>author</option>
      </select>
    </label>
  );
  return (
    <Page
      pageTitle="Your Saved Books"
      filters={[
,
        Sorter,
      ]}
    >
      <Shelf>
        {books
          .sort(({ [sortBy]: a }, { [sortBy]: b }) =>
            a < b ? -1 : a > b ? 1 : 0
          )
          .map(book => (
            <Book
              view={view}
              book={book}
              actions={actions}
              onSave={() => {
                actions.addBook(book);
              }}
              onRemove={() =>
                actions.removeBook(
                  saved.find(
                    ({ id }) => id === (book.primary_isbn13 || book.id)
                  )
                )
              }
              saved={saved.some(
                ({ id }) => id === (book.primary_isbn13 || book.id)
              )}
            />
          ))}
      </Shelf>
    </Page>
  );
}
