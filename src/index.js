import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { reducer } from './reducers/reducers'
import App from './components/App'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)),
)

const AppWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(AppWithStore, document.querySelector('#root'))
