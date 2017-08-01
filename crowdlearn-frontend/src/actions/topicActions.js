import {SET_TOPIC} from './types'
import axios from 'axios'

const ROOT_URL = 'http://localhost:3000/api/v1'

export const setTopic = topicId => {
  return dispatch => {
    return axios.get(`${ROOT_URL}/topics/${topicId}`)
    .then(topic => dispatch({type: SET_TOPIC, payload: topic.data}))
    .catch(err => console.log(err))
  }
}
