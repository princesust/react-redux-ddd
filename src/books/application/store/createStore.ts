import { createStore as createReduxStore, applyMiddleware, compose, Store } from 'redux'
import thunk from 'redux-thunk'

import rootReducer, { BooksInitialState } from 'books/application/reducers'

import saveStateInLocalStorage from './saveStateInLocalStorage'
import loadStateFromLocalStorage from './loadStateFromLocalStorage'

export default function createStore(): Store {
  const initialState = loadStateFromLocalStorage() as BooksInitialState

  const composeEnhancers = window._bf_REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createReduxStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

  store.subscribe(() => {
    saveStateInLocalStorage({ saved: store.getState().saved })
  })

  return store
}
