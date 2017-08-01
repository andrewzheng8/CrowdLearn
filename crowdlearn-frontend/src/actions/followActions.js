import axios from 'axios'
import {SET_VIEWER} from './types'

const ROOT_URL = 'http://localhost:3000/api/v1'

export const followTopic = (userId, topicId) => {
  return function (dispatch) {
    return axios.patch(`${ROOT_URL}/users/${userId}/topics/${topicId}/follow`)
    .then(response => {
      // If request is good...

      // update the current show course and replace the instance in the list
      dispatch({type: SET_VIEWER, payload: response.data})
    })
    .catch(err => {
      // If request is bad...
      // - Show an error to the user
      console.log(err)
      console.log('did not follow topic correctly')
    })
  }
}

export const unfollowTopic = (userId, topicId) => {
  return function (dispatch) {
    return axios.delete(`${ROOT_URL}/users/${userId}/topics/${topicId}/unfollow`)
    .then(response => {
      // If request is good...

      // update the current show course and replace the instance in the list
      dispatch({type: SET_VIEWER, payload: response.data})
    })
    .catch(err => {
      // If request is bad...
      // - Show an error to the user
      console.log(err)
      console.log('did not unfollow topic correctly')
    })
  }
}
