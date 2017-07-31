import axios from 'axios'
import {SET_COURSES, SET_COURSE, ADD_COURSE, FETCH_COURSES, REPLACE_COURSE} from './types'

const ROOT_URL = 'http://localhost:3000/api/v1'

export const setCourses = () => {
  return dispatch => {
    return axios.get(`${ROOT_URL}/courses`)
    .then(courses => dispatch({type: SET_COURSES, payload: courses.data}))
    .catch(err => console.log(err))
  }
}

export const setTopicCourses = topicId => {
  return dispatch => {
    return axios.get(`${ROOT_URL}/topics/${topicId}/courses`)
    .then(courses => dispatch({type: SET_COURSES, payload: courses.data}))
    .catch(err => console.log(err))
  }
}

export const addCourse = course => {
  return function (dispatch) {
    // Submit email/password to the server
    console.log(course, 'adding course')
    axios.post(`${ROOT_URL}/topics/${course.topic}/courses`, course)
      .then(response => {
        // If request is good...
        // - Update state to show course aådded in list and set show page to that course
        console.log(response, 'responding to add')
        dispatch({type: ADD_COURSE, payload: response.data})
        dispatch({type: SET_COURSE, payload: response.data})
      })
      .catch(err => {
        // If request is bad...
        // - Show an error to the user
        console.log(err)
        console.log('did not add course correctly')
      })
  }
}

export const addLocation = location => {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/courses/${location.course}/locations`, location)
    .then(response => {
      // If request is good...
      console.log('inside this addLocation')
      // update the current show course and replace the instance in the list
      dispatch({type: SET_COURSE, payload: response.data})
      dispatch({type: REPLACE_COURSE, payload: response.data})
    })
    .catch(err => {
      // If request is bad...
      // - Show an error to the user
      console.log(err)
      console.log('did not add location correctly')
    })
  }
}

export const fetchCourses = () => {
  return {type: FETCH_COURSES}
}
