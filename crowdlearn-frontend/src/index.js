import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from 'react-redux'
// import {createStore} from 'redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import 'semantic-ui-css/semantic.min.css'
import { composeWithDevTools } from 'redux-devtools-extension'
import {AUTH_USER} from './actions/action_types'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))
//, applyMiddleware(thunk)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const token = localStorage.getItem('token')
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state to authenticated=true
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
