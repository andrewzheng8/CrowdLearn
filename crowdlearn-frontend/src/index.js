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
import {AUTH_USER, SET_VIEWER} from './actions/types'
import {setViewer} from './actions/viewerActions'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))
//, applyMiddleware(thunk)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const token = localStorage.getItem('token')
const userId = localStorage.getItem('userId')
// If we have a token, consider the user to be signed in
// If we have a userId saved, use it.
// /may need to authenticate this token!!!!
if (token) {
  // we need to update application state to authenticated=true
  store.dispatch({ type: AUTH_USER })
}
if (userId) {
  // set the viewer in state to be the users id
  store.dispatch(setViewer(userId))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
