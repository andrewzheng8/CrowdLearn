import { combineReducers } from 'redux'
import {viewerReducer as viewer} from './viewer_reducer'
import {courseReducer as course} from './course_reducer'
import {coursesReducer as courses} from './courses_reducer'
import { reducer as form } from 'redux-form'
import {authReducer as auth} from './auth_reducer'

const rootReducer = combineReducers({
  viewer,
  courses,
  course,
  form,
  auth
})

export default rootReducer
