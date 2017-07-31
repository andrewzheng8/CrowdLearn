import {SET_TOPIC} from './types'

export const setTopic = topic => {
  return {type: SET_TOPIC, payload: topic}
}
