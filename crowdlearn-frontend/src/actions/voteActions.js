import axios from 'axios'
import {SET_COURSE, REPLACE_COURSE} from './types'

const ROOT_URL = 'http://localhost:3000/api/v1'

export const voteForLocation = (vote, locationId, courseId) => {
  return function (dispatch) {
    return axios.post(`${ROOT_URL}/courses/${courseId}/locations/${locationId}/votes`, vote)
    .then(response => {
      // If request is good...

      // update the current show course and replace the instance in the list
      dispatch({type: SET_COURSE, payload: response.data})
      dispatch({type: REPLACE_COURSE, payload: response.data})
    })
    .catch(err => {
      // If request is bad...
      // - Show an error to the user
      console.log(err)
      console.log('did not add vote correctly')
    })
  }
}

export const updateVote = (vote, locationId, courseId) => {
  console.log('in updateVote voteActions', vote, courseId, locationId)
  return function (dispatch) {
    return axios.patch(`${ROOT_URL}/courses/${courseId}/locations/${locationId}/votes/${vote._id}`, vote)
    .then(response => {
      // If request is good...

      // update the current show course and replace the instance in the list
      dispatch({type: SET_COURSE, payload: response.data})
      dispatch({type: REPLACE_COURSE, payload: response.data})
    })
    .catch(err => {
      // If request is bad...
      // - Show an error to the user
      console.log(err)
      console.log('did not update vote correctly')
    })
  }
}

export const removeVote = (vote, locationId, courseId) => {
  console.log('in removeVote voteActions', vote, courseId, locationId)
  return function (dispatch) {
    return axios.delete(`${ROOT_URL}/courses/${courseId}/locations/${locationId}/votes/${vote._id}`)
    .then(response => {
      // If request is good...

      // update the current show course and replace the instance in the list
      dispatch({type: SET_COURSE, payload: response.data})
      dispatch({type: REPLACE_COURSE, payload: response.data})
    })
    .catch(err => {
      // If request is bad...
      // - Show an error to the user
      console.log(err)
      console.log('did not remove vote correctly')
    })
  }
}
