import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers/reducers'
import App from './components/App'

const store = createStore(reducer)
const AppWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(AppWithStore, document.querySelector('#root'))
