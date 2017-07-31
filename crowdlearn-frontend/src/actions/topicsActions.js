import axios from 'axios'
import {SET_TOPICS, SET_TOPIC, ADD_TOPIC, FETCH_TOPICS, REPLACE_TOPIC} from './types'

const ROOT_URL = 'http://localhost:3000/api/v1'

export const setTopics = () => {
  return dispatch => {
    return axios.get(`${ROOT_URL}/topics`)
    .then(topics => dispatch({type: SET_TOPICS, payload: topics.data}))
    .catch(err => console.log(err))
  }
}

export const addTopic = topic => {
  return function (dispatch) {
    // Submit email/password to the server
    return axios.post(`${ROOT_URL}/topics`, topic)
      .then(response => {
        // If request is good...
        // - Update state to show course added in list and set show page to that course
        dispatch({type: ADD_TOPIC, payload: response.data})
        dispatch({type: SET_TOPIC, payload: response.data})
      })
      .catch(err => {
        // If request is bad...
        // - Show an error to the user
        console.log(err)
        console.log('did not add topic correctly')
      })
  }
}
