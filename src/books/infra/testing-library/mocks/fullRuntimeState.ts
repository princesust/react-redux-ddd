import { RootState } from 'shared/domain/RootState'

import book from './book'
import list from './list'
import differentBook from './differentBook'

export default {
  books: {
    books: [book, differentBook],
    saved: [book],
    offset: 0,
    loaded: true,
    loadedAll: true
  },
  filters: {
    lists: [list],
    listSelected: list.list_name_encoded,
    listSortOption: 'title'
  },
  view: {
    view: 'grid'
  }
} as RootState
