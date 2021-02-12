import { CachedState } from 'books/domain/CachedState'

import book from './book'
import list from './list'

export default {
  books: {
    saved: [book],
    offset: 0
  },
  filters: {
    listSelected: list.list_name_encoded,
    listSortOption: 'title'
  },
  view: {
    view: 'grid'
  }
} as CachedState
