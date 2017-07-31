import { combineReducers } from 'redux'
import {viewerReducer as viewer} from './viewer_reducer'
import {courseReducer as course} from './course_reducer'
import {coursesReducer as courses} from './courses_reducer'
import {topicsReducer as topics} from './topics_reducer'
import {topicReducer as topic} from './topic_reducer'
import {topicsMenuReducer as topicsMenu} from './topics_menu_reducer'
import { reducer as form } from 'redux-form'
import {authReducer as auth} from './auth_reducer'

const rootReducer = combineReducers({
  viewer,
  courses,
  course,
  form,
  auth,
  topic,
  topics,
  topicsMenu
})

export default rootReducer
