import {SET_TOPIC} from '../actions/types'

export const topicReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TOPIC:
      return {...action.payload} // payload should be the viewer/user object
    default:
      return state
  }
}
