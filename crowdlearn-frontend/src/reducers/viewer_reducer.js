import {SET_VIEWER} from '../actions/action_types'

export const viewerReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_VIEWER:
      return {...action.payload} // payload should be the viewer/user object
    default:
      return state
  }
}
