import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SignUpForm from '../components/authComponents/SignUpForm'
import SignOut from '../components/authComponents/SignOut'
import SignInForm from '../components/authComponents/SignInForm'
import CoursesContainer from './CoursesContainer'
import RequireAuth from '../hocs/RequireAuth'
import Header from '../components/Header'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <div>
            <Route path='/' component={Header} />
            <Route path='/signin' component={SignInForm} />
            <Route path='/signout' component={SignOut} />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/courses' component={RequireAuth(CoursesContainer)} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
