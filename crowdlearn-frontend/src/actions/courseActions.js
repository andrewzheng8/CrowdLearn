import {SET_COURSE} from './types'
import axios from 'axios'

const ROOT_URL = 'http://localhost:3000/api/v1'

export const setCourse = course => {
  return {type: SET_COURSE, payload: course}
}

export const fetchCourse = courseId => {
  return dispatch => {
    return axios.get(`${ROOT_URL}/courses/${courseId}`)
    .then(course => dispatch({type: SET_COURSE, payload: course.data}))
    .catch(err => console.log(err))
  }
}
