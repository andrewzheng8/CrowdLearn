import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUpForm from './components/authComponents/SignUpForm'
import SignOut from './components/authComponents/SignOut'
import SignInForm from './components/authComponents/SignInForm'
import TopicCoursesContainer from './components/courseComponents/TopicCoursesContainer'
import TopicsPage from './components/topicsComponents/TopicsPage'
import CoursePage from './components/courseComponents/CoursePage'
import MyProfilePage from './components/Profile/MyProfilePage'
import RequireAuth from '../hocs/RequireAuth'
import NavBar from './components/NavBar'
import PageNotFound from './components/PageNotFound'
import HomePage from './components/homePageComponents/HomePage'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <div>
            <Route path='/' component={NavBar} />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/signin' component={SignInForm} />
              <Route exact path='/signout' component={SignOut} />
              <Route exact path='/signup' component={SignUpForm} />
              <Route exact path='/my_profile' component={RequireAuth(MyProfilePage)} />
              <Route exact path='/topics' component={RequireAuth(TopicsPage)} />
              <Route exact path='/topics/:topicId' component={RequireAuth(TopicCoursesContainer)} />
              <Route exact path='/courses/:courseId' component={RequireAuth(CoursePage)} />
              <Route path='/:anythingelse' component={PageNotFound} />
            </Switch>

          </div>
        </Router>
      </div>
    )
  }
}

export default App
