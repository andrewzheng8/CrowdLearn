import axios from 'axios'
import {SET_COURSES, ADD_COURSE, FETCH_COURSES} from './action_types'

const ROOT_URL = 'http://localhost:3000/api/v1'

export const setCourses = () => {
  // return {type: SET_COURSES, payload: courses}
  return dispatch => {
    // dispatch({type: FETCH_COURSES})
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
        console.log('from server on course creation', response)
        dispatch({type: ADD_COURSE, payload: course})
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        console.log('did not add course correctly')
        // dispatch(authError('Bad Login Info'))
      })
  }
}

export const fetchCourses = () => {
  return {type: FETCH_COURSES}
}
