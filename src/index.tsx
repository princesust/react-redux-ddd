import React from 'react'
import ReactDOM from 'react-dom'
import { compose } from 'redux'
import { Provider } from 'react-redux'

import createStore from 'books/application/store/createStore'

import App from './App'

declare global {
  interface Window {
    // eslint-disable-next-line camelcase
    _bf_REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const store = createStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
