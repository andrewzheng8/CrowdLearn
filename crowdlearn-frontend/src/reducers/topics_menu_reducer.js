import {SET_ACTIVE_ITEM} from '../actions/types'

export const topicsMenuReducer = (state = {}, action) => {
  switch (action.type) {
    // case FETCH_COURSES:
    //   console.log('fetching', state)
    //   return {...state, loading: true}
    case SET_ACTIVE_ITEM:
      return {...state, activeItem: action.payload}// {loading: false, courses: [...action.payload]} // payload should be the viewer/user object
    default:
      return state
  }
}
