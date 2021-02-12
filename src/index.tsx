import React from 'react'
import ReactDOM from 'react-dom'
import { compose } from 'redux'
import { Provider } from 'react-redux'

import createStoreFromInitialState from 'store/createStoreFromInitialState'
import { CachedState } from 'books/domain/CachedState'
import loadStateFromLocalStorage from 'books/application/utils/loadStateFromLocalStorage'

import App from './App'

declare global {
  interface Window {
    // eslint-disable-next-line camelcase
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const initialState = loadStateFromLocalStorage()

const store = createStoreFromInitialState(initialState as CachedState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
