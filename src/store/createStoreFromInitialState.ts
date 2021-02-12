import { createStore as createReduxStore, applyMiddleware, compose, Store, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { RootActions } from 'books/domain/RootActions'
import booksReducer from 'books/application/reducers/books'
import filtersReducer from 'books/application/reducers/filters'
import viewReducer from 'books/application/reducers/view'

import { RootState } from './RootState'
import subscribe from './subscribe'
import { CachedState } from 'books/domain/CachedState'

/**
 * This should actually combine all reducers from different bounded contexts stores
 */
export default function createStoreFromInitialState(initialState: CachedState): Store<RootState, RootActions> {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createReduxStore(
    combineReducers({
      books: booksReducer,
      filters: filtersReducer,
      view: viewReducer
    }),
    initialState as Partial<RootState>,
    composeEnhancers(applyMiddleware(thunk))
  )

  subscribe(store)

  return store
}
