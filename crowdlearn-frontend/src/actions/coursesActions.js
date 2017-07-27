import axios from 'axios'
import {SET_COURSES, SET_COURSE, ADD_COURSE, FETCH_COURSES} from './types'

const ROOT_URL = 'http://localhost:3000/api/v1'

export const setCourses = () => {
  return dispatch => {
    return axios.get(`${ROOT_URL}/courses`)
    .then(courses => dispatch({type: SET_COURSES, payload: courses.data}))
    .catch(err => console.log(err))
  }
}

export const addCourse = course => {
  return function (dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/courses`, course)
      .then(response => {
        // If request is good...
        // - Update state to show course added
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
  console.log(location, 'adding loc in client - loc')
  return function (dispatch) {
    return axios.post(`${ROOT_URL}/locations`, location)
    .then(response => {
      // If request is good...
      console.log(response, 'responding to add location')
      dispatch({type: SET_COURSE, payload: response.data}) 

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
