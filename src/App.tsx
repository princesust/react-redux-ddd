import React from 'react'
import { Router } from '@reach/router'

import DefaultThemeProvider from 'shared/interface/theme/DefaultThemeProvider'
import Overview from 'books/interface/pages/Overview'
import SavedBookShelf from 'books/interface/pages/SavedBookShelf'
import BookDetails from 'books/interface/pages/BookDetails'

function App() {
  return (
    <DefaultThemeProvider>
      <Router>
        <Overview path="/*listName" />
        <BookDetails path="books/:bookId" />
        <SavedBookShelf path="saved" />
      </Router>
    </DefaultThemeProvider>
  )
}

export default React.memo(App)
