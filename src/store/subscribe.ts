import { Store } from 'redux'
import throttle from 'lodash.throttle'

import saveStateInLocalStorage from 'books/application/utils/saveStateInLocalStorage'
import { RootActions } from 'books/domain/RootActions'

import { RootState } from './RootState'

export default function subscribe(store: Store<RootState, RootActions>): void {
  store.subscribe(
    throttle(() => {
      const state = store.getState()
      const { listSelected, listSortOption } = state.filters
      const { saved, offset } = state.books

      saveStateInLocalStorage({
        books: { saved, offset },
        filters: { listSelected, listSortOption },
        view: state.view
      })
    }, 1000)
  )
}
