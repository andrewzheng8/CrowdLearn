import axios from 'axios'
import {ADD_LOCATION} from './types'

const ROOT_URL = 'http://localhost:3000/api/v1'
//
// export const fetchLocaitons = course => {
//   return dispatch => {
//     return axios.get(`${ROOT_URL}/locations`)
//     .then(courses => dispatch({type: SET_COURSES, payload: courses.data}))
//     .catch(err => console.log(err))
//   }
// }
//
export const addLocation = location => {
  return function (dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/locations`, location)
      .then(response => {
        // If request is good...
        // - Update state to show course added
        console.log(response, 'responding to add location')
        //dispatch({type: ADD_LOCATION, payload: response.data})
      })
      .catch(err => {
        // If request is bad...
        // - Show an error to the user
        console.log(err)
        console.log('did not add location correctly')
      })
  }
}
