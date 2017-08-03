import {SET_VIEWER} from './types'
import axios from 'axios'

const ROOT_URL = 'http://localhost:3000/api/v1'

export function setViewer (userId) {
  return dispatch => {
    return axios.get(`${ROOT_URL}/users/${userId}`)
      .then(response => dispatch({type: SET_VIEWER, payload: response.data}))
      .catch(err => console.log(err))
  }
}

export function updateUser (userId, userInfo) {
  return dispatch => {
    return axios.patch(`${ROOT_URL}/users/${userId}`, userInfo)
      .then(response => dispatch({type: SET_VIEWER, payload: response.data}))
      .catch(err => console.log(err))
  }
}
