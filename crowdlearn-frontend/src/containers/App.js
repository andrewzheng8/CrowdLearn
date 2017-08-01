import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SignUpForm from '../components/authComponents/SignUpForm'
import SignOut from '../components/authComponents/SignOut'
import SignInForm from '../components/authComponents/SignInForm'
import TopicCoursesContainer from './TopicCoursesContainer'
import TopicsPage from '../components/topicsComponents/TopicsPage'
import MyProfilePage from '../components/Profile/MyProfilePage'
import RequireAuth from '../hocs/RequireAuth'
import NavBar from '../components/Header'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <div>
            <Route path='/' component={NavBar} />
            <Route path='/signin' component={SignInForm} />
            <Route path='/signout' component={SignOut} />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/my_profile' component={RequireAuth(MyProfilePage)} />
            <Route exact path='/topics' component={RequireAuth(TopicsPage)} />
            <Route path='/topics/:topicId' component={RequireAuth(TopicCoursesContainer)} />

          </div>
        </Router>
      </div>
    )
  }
}

export default App

{ /* <Route path='/courses' component={RequireAuth(CoursesContainer)} /> */ }
