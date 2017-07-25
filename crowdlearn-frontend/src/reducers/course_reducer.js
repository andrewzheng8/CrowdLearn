import {SET_COURSE, SHOW_FORM} from '../actions/action_types'

export const courseReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_COURSE:
      return {...action.payload} // payload should be the viewer/user object
    default:
      return state
  }
}
