import React from 'react'
import { Router } from '@reach/router'

import DefaultThemeProvider from 'theme/DefaultThemeProvider'
// import Bookshelf from 'pages/BookShelf/Bookshelf';
// import BookDetails from 'pages/BookDetails/BookDetails';
import Overview from 'books/interface/pages/Overview'

function App() {
  return (
    <DefaultThemeProvider>
      <Router>
        <Overview path="/*listName" />
        {/* <BookDetails path="books/:bookId" />
        <Bookshelf path="saved" /> */}
      </Router>
    </DefaultThemeProvider>
  )
}

export default React.memo(App)
