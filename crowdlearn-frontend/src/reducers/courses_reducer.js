import {SET_COURSES, ADD_COURSE, FETCH_COURSES, REPLACE_COURSE} from '../actions/types'

export const coursesReducer = (state = [], action) => {
  switch (action.type) {
    // case FETCH_COURSES:
    //   console.log('fetching', state)
    //   return {...state, loading: true}
    case SET_COURSES:
      console.log('fetched', state)
      console.log(action.payload)
      return [...action.payload]// {loading: false, courses: [...action.payload]} // payload should be the viewer/user object
    case ADD_COURSE:
      return [...state, {...action.payload}]
    case REPLACE_COURSE:
      let nextState = [...state]
      const isCourse = el => el._id === action.payload._id
      const courseIndex = nextState.findIndex(isCourse)
      nextState[courseIndex] = {...action.payload}
      return nextState
    default:
      return state
  }
}
